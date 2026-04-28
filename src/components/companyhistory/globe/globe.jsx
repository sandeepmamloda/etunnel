"use client"
import { useEffect, useRef } from "react";

const Globe = function () {
    const canvasRef = useRef(null);
    const wrapRef = useRef(null);

    useEffect(() => {
        const loadScript = (src) => new Promise((resolve) => {
            const s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            document.head.appendChild(s);
        });

        const init = async () => {
            await document.fonts.ready;
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js');
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js');
            await loadScript('https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js');

            const THREE = window.THREE;
            const d3 = window.d3;
            const topojson = window.topojson;

            const canvas = canvasRef.current;
            const wrap = wrapRef.current;
            if (!canvas || !wrap) return;

            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            renderer.setClearColor(0x000000, 0);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(wrap.clientWidth, wrap.clientHeight);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, wrap.clientWidth / wrap.clientHeight, 0.1, 100);
            camera.position.z = 2.8;

            scene.add(new THREE.AmbientLight(0xfff3e0, 0.9));
            const dl = new THREE.DirectionalLight(0xffe0c0, 0.3); dl.position.set(4, 3, 4); scene.add(dl);
            const bl = new THREE.DirectionalLight(0xffddbb, 0.2); bl.position.set(-3, -2, -3); scene.add(bl);

            const locs = [
                { name: 'USA', lat: 37.77, lng: -122.42 },
                { name: 'INDIA', lat: 20.59, lng: 78.96 },
                { name: 'SOUTH KOREA', lat: 37.57, lng: 126.98 },
                { name: 'SINGAPORE', lat: 1.35, lng: 103.82 },
            ];

            function ll2v(lat, lng, r) {
                const phi = (90 - lat) * Math.PI / 180, theta = (lng + 180) * Math.PI / 180;
                return new THREE.Vector3(
                    -r * Math.sin(phi) * Math.cos(theta),
                    r * Math.cos(phi),
                    r * Math.sin(phi) * Math.sin(theta)
                );
            }

            function ll2px(lat, lng, W, H) {
                const x = ((lng + 180) / 360) * W;
                const y = ((90 - lat) / 180) * H;
                return [x, y];
            }

            function buildTexture(world, pulseScales) {
                const size = 2048;
                const W = size, H = size / 2;
                const oc = document.createElement('canvas');
                oc.width = W; oc.height = H;
                const ctx = oc.getContext('2d');

                const grad = ctx.createLinearGradient(0, 0, 0, H);
                grad.addColorStop(0, '#fce0c0');
                grad.addColorStop(1, '#fdf5ec');
                ctx.fillStyle = grad;
                ctx.fillRect(0, 0, W, H);

                ctx.strokeStyle = 'rgba(200,140,80,0.12)';
                ctx.lineWidth = 0.6;
                for (let lon = -180; lon <= 180; lon += 30) {
                    const x = ((lon + 180) / 360) * W;
                    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
                }
                for (let lat = -90; lat <= 90; lat += 30) {
                    const y = ((90 - lat) / 180) * H;
                    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
                }

                const proj = d3.geoEquirectangular().scale(W / (2 * Math.PI)).translate([W / 2, H / 2]);
                const path = d3.geoPath().projection(proj).context(ctx);
                const countries = topojson.feature(world, world.objects.countries);
                countries.features.forEach(f => {
                    ctx.beginPath(); path(f);
                    ctx.fillStyle = '#f4a96a';
                    ctx.fill();
                    ctx.strokeStyle = 'rgba(255,255,255,0.6)';
                    ctx.lineWidth = 0.9;
                    ctx.stroke();
                });

                locs.forEach((loc, i) => {
                    const [px, py] = ll2px(loc.lat, loc.lng, W, H);
                    const ps = pulseScales ? pulseScales[i] : 0;

                    if (ps > 0) {
                        const pr = 12 + ps * 16;
                        const gPulse = ctx.createRadialGradient(px, py, pr * 0.5, px, py, pr);
                        gPulse.addColorStop(0, `rgba(244,122,32,${0.45 * (1 - ps)})`);
                        gPulse.addColorStop(1, 'rgba(244,122,32,0)');
                        ctx.beginPath(); ctx.arc(px, py, pr, 0, Math.PI * 2);
                        ctx.fillStyle = gPulse; ctx.fill();
                    }

                    const gHalo = ctx.createRadialGradient(px, py, 0, px, py, 18);
                    gHalo.addColorStop(0, 'rgba(244,122,32,0.55)');
                    gHalo.addColorStop(0.5, 'rgba(244,122,32,0.20)');
                    gHalo.addColorStop(1, 'rgba(244,122,32,0)');
                    ctx.beginPath(); ctx.arc(px, py, 18, 0, Math.PI * 2);
                    ctx.fillStyle = gHalo; ctx.fill();

                    ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2);
                    ctx.fillStyle = '#f47a20'; ctx.fill();
                });

                return new THREE.CanvasTexture(oc);
            }

            let globe, globeMat, mg;
            let pulseScales = locs.map(() => 0);

            const AUTO_SPEED = 0.002;
            const DEFAULT_RX = 0.1;
            const RESET_SPEED = 0.04;
            const SENSITIVITY = 0.003;
            const LERP_FACTOR = 0.12;
            const FRICTION = 0.88;

            let targetRY = 0.3, targetRX = DEFAULT_RX;
            let ry = 0.3, rx = DEFAULT_RX;
            let velY = 0, velX = 0;
            let drag = false, pm = { x: 0, y: 0 };

            function pointerDown(x, y) { drag = true; pm = { x, y }; velY = 0; velX = 0; }
            function pointerMove(x, y) {
                if (!drag) return;
                const dx = x - pm.x, dy = y - pm.y;
                velY = velY * 0.6 + dx * SENSITIVITY * 0.4;
                velX = velX * 0.6 + dy * SENSITIVITY * 0.4;
                targetRY += dx * SENSITIVITY;
                targetRX += dy * SENSITIVITY;
                targetRX = Math.max(-1.2, Math.min(1.2, targetRX));
                pm = { x, y };
            }
            function pointerUp() { drag = false; }

            wrap.addEventListener('mousedown', e => pointerDown(e.clientX, e.clientY));
            window.addEventListener('mouseup', pointerUp);
            window.addEventListener('mousemove', e => pointerMove(e.clientX, e.clientY));
            wrap.addEventListener('touchstart', e => { pointerDown(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
            window.addEventListener('touchend', pointerUp);
            wrap.addEventListener('touchmove', e => { pointerMove(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });

            fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
                .then(r => r.json())
                .then(world => {
                    globeMat = new THREE.MeshPhongMaterial({
                        map: buildTexture(world, pulseScales),
                        specular: new THREE.Color(0xffd0a0),
                        shininess: 12
                    });
                    globe = new THREE.Mesh(new THREE.SphereGeometry(1, 64, 64), globeMat);
                    scene.add(globe);

                    mg = new THREE.Group();
                    locs.forEach(loc => {
                        const pos = ll2v(loc.lat, loc.lng, 1);
                        const dir = pos.clone().normalize();

                        const sc = document.createElement('canvas');
                        sc.width = 300; sc.height = 70;
                        const sx = sc.getContext('2d');
                        sx.clearRect(0, 0, 300, 70);
                        sx.fillStyle = '#1a1a1a';
                        sx.font = '600 28px NeueHaasDisplayThin, sans-serif';
                        sx.textAlign = 'center'; sx.textBaseline = 'middle';
                        sx.fillText(loc.name, 150, 35);
                        const st = new THREE.CanvasTexture(sc);
                        const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: st, transparent: true }));
                        sprite.scale.set(0.42, 0.10, 1);
                        sprite.position.copy(pos.clone().add(dir.clone().multiplyScalar(0.24)));
                        sprite.userData.label = true;
                        mg.add(sprite);
                    });
                    scene.add(mg);

                    globe.userData.world = world;
                });

            let tt = 0;
            let frameCount = 0;
            let animId;

            function anim() {
                animId = requestAnimationFrame(anim);
                tt += 0.016;
                frameCount++;

                if (drag) {
                    ry += (targetRY - ry) * LERP_FACTOR;
                    rx += (targetRX - rx) * LERP_FACTOR;
                } else {
                    velY *= FRICTION; velX *= FRICTION;
                    targetRY += velY + AUTO_SPEED;
                    targetRX += velX;
                    targetRX += (DEFAULT_RX - targetRX) * RESET_SPEED;
                    targetRX = Math.max(-1.2, Math.min(1.2, targetRX));
                    ry += (targetRY - ry) * LERP_FACTOR;
                    rx += (targetRX - rx) * LERP_FACTOR;
                }

                if (globe) {
                    globe.rotation.y = ry;
                    globe.rotation.x = rx;

                    if (frameCount % 8 === 0 && globe.userData.world) {
                        pulseScales = locs.map((_, i) =>
                            Math.abs(Math.sin(tt * 1.8 + i * 1.2))
                        );
                        globeMat.map.dispose();
                        globeMat.map = buildTexture(globe.userData.world, pulseScales);
                        globeMat.map.needsUpdate = true;
                    }
                }

                if (mg) {
                    mg.rotation.y = ry;
                    mg.rotation.x = rx;
                    mg.children.forEach(m => {
                        if (m.userData.label) m.lookAt(camera.position);
                    });
                }

                renderer.render(scene, camera);
            }
            anim();

            return () => {
                cancelAnimationFrame(animId);
                renderer.dispose();
            };
        };

        init();
    }, []);

    return (
        <>
            <div
                ref={wrapRef}
                style={{
                    width: '100%',
                    height: '100svh',
                    maxWidth: "100%",
                    marginInline:"auto",
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    background: "transparent",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <canvas
                    ref={canvasRef}
                    style={{ display: 'block', width: '100%', height: '100%' }}
                />
                <div style={{
                    position: 'absolute',
                    bottom: '14px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '11px',
                    color: 'rgba(120,80,40,0.4)',
                    letterSpacing: '0.5px'
                }}>
                    drag to rotate
                </div>
            </div>
            <div style={{
                width: '100%',
                textAlign: 'center',
                paddingBlock: '2rem',
            }}>
                <p className="globe-desc-text" style={{
                    fontSize: '1.4rem',
                    fontFamily: 'NeueHaasDisplayXThin',
                    fontWeight: '600',
                    color: '#000',
                    lineHeight: '160%',
                    letterSpacing: '0.05rem',
                    margin: '0',
                }}>
                    With branches in the U.S., India, and Singapore, ETUNNEL offers global biometric security solutions.<br />
                    We will strengthen our global presence through innovation and partnerships.
                </p>
            </div>
        </>
    );
};

export default Globe;