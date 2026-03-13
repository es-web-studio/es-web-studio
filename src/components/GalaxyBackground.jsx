import React, { useEffect, useRef } from 'react';

const STAR_COUNT = 300; // Adjusted for better performance while maintaining density

class Star {
    constructor(canvas) {
        this.canvas = canvas;
        this.reset();
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.vx = (Math.random() - 0.5) * 0.15; // Slower drift
        this.vy = (Math.random() - 0.5) * 0.15;
        this.baseOpacity = this.opacity;
    }

    update(mouse) {
        this.x += this.vx;
        this.y += this.vy;

        if (mouse.active) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 350;

            if (distance < maxDistance) {
                const force = (maxDistance - distance) / maxDistance;
                this.x -= dx * force * 0.015;
                this.y -= dy * force * 0.015;
                this.opacity = Math.min(0.8, this.baseOpacity + force * 0.4);
            } else {
                this.opacity = this.baseOpacity;
            }
        } else {
            this.opacity = this.baseOpacity;
        }

        if (this.x < 0) this.x = this.canvas.width;
        if (this.x > this.canvas.width) this.x = 0;
        if (this.y < 0) this.y = this.canvas.height;
        if (this.y > this.canvas.height) this.y = 0;
    }

    draw(ctx) {
        // Optimized draw: simple circles, no shadowBlur (expensive)
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
    }
}

const GalaxyBackground = () => {
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d', { alpha: true });
        let animationFrameId;
        const stars = [];

        const resizeCanvas = () => {
            const parent = canvas.parentElement;
            if (!parent) return;
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
            initStars();
        };

        const initStars = () => {
            stars.length = 0;
            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push(new Star(canvas));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => {
                star.update(mouseRef.current);
                star.draw(ctx);
            });
            animationFrameId = window.requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: (e.clientY + window.scrollY) - (rect.top + window.scrollY),
                active: true
            };
        };

        const handleMouseLeave = () => {
            mouseRef.current.active = false;
        };

        const parent = canvas.parentElement;
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        if (parent) {
            parent.addEventListener('mouseleave', handleMouseLeave);
        }
        
        resizeCanvas();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            if (parent) {
                parent.removeEventListener('mouseleave', handleMouseLeave);
            }
            window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{
                maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)',
                opacity: 0.5
            }}
        />
    );
};

export default GalaxyBackground;
