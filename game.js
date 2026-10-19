        // ==========================================
        // GAME CONFIGURATION & DATA
        // ==========================================
        const CHARACTERS = {
            'peashooter': { 
                name: 'Peashooter', color: 0x32CD32, skins: [0x32CD32, 0x00BFFF, 0xFF4500, 0x4B0082], speed: 0.18, jump: 0.35, weight: 1.0, 
                skinNames: ['Classic', 'Snow Pea', 'Fire Pea', 'Shadow Pea'],
                icon: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/peashooterimageG.png',
                portraits: [
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/peashooterimageG.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/peashooterimageB.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/peashooterimageR.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/peashooterimageP.png'
                ],
                modelUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/plants_vs._zombies_3_pre-_alpha_-_peashooter.glb',
                modelScale: 3.8, 
                skinUrls: [
                    null, 
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/2026_06_11_0qq_Kleki.png', 
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/2026_06_11_0qr_Kleki.png', 
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/2026_06_11_0qk_Kleki.png'  
                ],
                moves: { 
                    neutral: { type: 'melee', dmg: 5, kb: 1.2, w: 2, h: 2, d: 2, ox: 1.5, oy: 0, duration: 10, startup: 3 },
                    forward_neutral: { type: 'melee', dmg: 9, kb: 1.6, w: 3, h: 2, d: 2, ox: 2, oy: 0, duration: 15, startup: 6 },
                    up_neutral: { type: 'melee', dmg: 7, kb: 1.5, w: 2, h: 4, d: 2, ox: 0.5, oy: 2, duration: 12, startup: 4 },
                    down_neutral: { type: 'melee', dmg: 6, kb: 1.3, w: 3, h: 1, d: 2, ox: 1.5, oy: -1.5, duration: 12, startup: 5 },
                    special: { type: 'projectile', dmg: 8, kb: 1.5, vx: 0.4, vy: 0, w: 0.8, color: 0x90EE90, life: 60, duration: 15, startup: 5 },
                    up_special: { type: 'recovery_dash', dmg: 5, kb: 1.2, vx: 0.1, vy: 0.5, w: 2.5, h: 2.5, duration: 25, startup: 2 },
                    down_special: { type: 'projectile', dmg: 15, kb: 2.5, vx: 0.1, vy: 0, w: 1.5, color: 0x8B4513, life: 100, duration: 20, startup: 10 } 
                }
            },
            'denji': { name: 'Denji', color: 0xFF8C00, skins: [0xFF8C00, 0xDC143C, 0x00CED1, 0x808080], speed: 0.22, jump: 0.38, weight: 1.1,
                skinNames: ['Public Safety', 'Blood Fiend', 'Devil Hunter', 'Manga Accurate'],
                icon: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/csmskinO.png',
                portraits: [
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/csmskinO.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/csmskinR.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/csmskinB.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/csmskinG.png'
                ],
                modelUrls: {
                    'idle': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/csm%20idle.fbx',
                    'run': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/csm%20run.fbx',
                    'jump': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/cms%20jum.fbx',
                    'attack': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/csm%20attack.fbx',
                    'fall': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/cms%20jum.fbx',
                    'special': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/csm%20attack.fbx'
                },
                modelScale: 0.0008, 
                customModelScales: {
                    'idle': 0.0008,
                    'run': 0.0008,
                    'jump': 0.0008,
                    'attack': 0.0008,
                    'fall': 0.0008,
                    'special': 0.0008
                },
                modelRotationOffsets: {
                    'attack': 0, 
                    'special': 0
                },
                skinUrls: [
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/cms%20texture.png', // Default Orange
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/ChatGPT%20Image%20Jun%2013,%202026,%2012_55_43%20PM.png', // Red
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/2026_06_13_0lr_Kleki.png', // Blue
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/2026_06_13_0ls_Kleki.png'  // Grey
                ],
                moves: { 
                    neutral: { type: 'melee', dmg: 10, kb: 1.5, w: 3, h: 3, d: 2, ox: 2, oy: 0, duration: 12, startup: 4 },
                    forward_neutral: { type: 'melee', dmg: 14, kb: 2.0, w: 4, h: 3, d: 2, ox: 2.5, oy: 0, duration: 18, startup: 7 },
                    up_neutral: { type: 'melee', dmg: 11, kb: 1.8, w: 3, h: 4, d: 2, ox: 1, oy: 2, duration: 15, startup: 5 },
                    down_neutral: { type: 'melee', dmg: 12, kb: 1.7, w: 4, h: 2, d: 2, ox: 2, oy: -1, duration: 14, startup: 6 },
                    special: { type: 'dash', dmg: 15, kb: 2.2, speed: 0.6, duration: 12, startup: 0, w: 4, h: 4, ox: 0, oy: 0 },
                    up_special: { type: 'recovery_dash', dmg: 8, kb: 1.5, vx: 0.2, vy: 0.6, duration: 20, w: 3, h: 4, ox: 0, oy: 1 },
                    down_special: { type: 'melee', dmg: 18, kb: 2.5, w: 6, h: 3, d: 4, ox: 0, oy: 0, duration: 20, startup: 8 } 
                }
            },
            'jotaro': { name: 'Jotaro', color: 0x4B0082, skins: [0x4B0082, 0x000000, 0xFFFFFF, 0x228B22], speed: 0.16, jump: 0.32, weight: 1.2,
                skinNames: ['Stardust Crusader', 'Part 3 Anime', 'Part 4 White', 'Part 6 Green'],
                icon: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/JotaroskinP.png',
                portraits: [
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/JotaroskinP.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/JotaroskinB.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/JotaroskinW.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/JotaroskinG.png'
                ],
                modelUrls: {
                    'idle': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/jotaro%20idle.fbx',
                    'run': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/jotaro%20walk.fbx',
                    'jump': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/jotaro%20jump.fbx',
                    'attack': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/jotaro%20point.fbx',
                    'fall': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/jotaro%20jump.fbx',
                    'special': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/jotaro%20point.fbx'
                },
                modelScale: 0.00025, // Scaled down to match Invincible!
                customModelScales: {
                    'idle': 0.00025,
                    'run': 0.00025,
                    'jump': 0.00025,
                    'attack': 0.00025,
                    'fall': 0.00025,
                    'special': 0.00025
                },
                modelRotationOffsets: {
                    'attack': 0,
                    'special': 0
                },
                skinUrls: [
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/jotarotex.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/ChatGPT%20Image%20Jun%2013,%202026,%2005_18_53%20PM.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/ChatGPT%20Image%20Jun%2013,%202026,%2005_24_33%20PM.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/ChatGPT%20Image%20Jun%2013,%202026,%2005_28_38%20PM.png'
                ],
                // NEW: Stand configuration
                standData: {
                    modelUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/star%20platinum.fbx',
                    textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/sp.png',
                    scale: 0.00625, // Scaled proportionally so he still matches Jotaro perfectly
                    offsetX: 2.0, // This places him exactly where the hitbox spawns!
                    offsetY: -1.75, // Keeps him planted on the floor relative to Jotaro
                    rotationOffset: 0
                },
                moves: { 
                    neutral: { type: 'melee', dmg: 4, kb: 0.5, w: 3, h: 2.5, d: 2, ox: 1.8, oy: 0, duration: 25, startup: 2 },
                    forward_neutral: { type: 'melee', dmg: 16, kb: 2.3, w: 4, h: 3, d: 2, ox: 2.5, oy: 0, duration: 20, startup: 8 },
                    up_neutral: { type: 'melee', dmg: 13, kb: 2.0, w: 3, h: 5, d: 2, ox: 1.5, oy: 2.5, duration: 15, startup: 6 },
                    down_neutral: { type: 'melee', dmg: 9, kb: 1.6, w: 4, h: 1.5, d: 2, ox: 2, oy: -1.5, duration: 12, startup: 5 },
                    special: { type: 'melee', dmg: 18, kb: 2.5, w: 6, h: 1.5, d: 2, ox: 4, oy: 0, duration: 15, startup: 10 }, 
                    up_special: { type: 'recovery_dash', dmg: 10, kb: 1.8, vx: 0.3, vy: 0.5, w: 4, h: 4, ox: 0, oy: 0, duration: 18, startup: 4 },
                    down_special: { type: 'melee', dmg: 25, kb: 3.0, w: 8, h: 4, d: 4, ox: 0, oy: 0, duration: 30, startup: 20 } 
                }
            },
            'knight': { name: 'Knight', color: 0xFF0000, skins: [0xFF0000, 0x0000FF, 0x32CD32, 0xFF8C00], speed: 0.20, jump: 0.35, weight: 1.0,
                skinNames: ['Red Knight (Lightning)', 'Blue Knight (Ice)', 'Green Knight (Poison)', 'Orange Knight (Fire)'],
                icon: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/castleR.png',
                portraits: [
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/castleR.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/castleB.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/castleG.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/castleO.png'
                ],
                // NEW ENGINE FEATURE: Swapping entire GLB models based on the selected skin!
                skinModels: [
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/cc_compressed.glb',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/bluknight_compressed.glb',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/greenknight_compressed.glb',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/orangeknight_compressed.glb'
                ],
                modelScale: 0.6, // Shrunk from 1.5!
                skinMaterials: [], // This empty array stops the engine from tinting his built-in colors!
                moves: { 
                    neutral: { type: 'projectile', dmg: 6, kb: 1.2, vx: 0.5, vy: 0, w: 0.8, color: 0xFFFFFF, life: 30, duration: 12, startup: 4 },
                    forward_neutral: { type: 'melee', dmg: 10, kb: 1.6, w: 4, h: 3, d: 2, ox: 2, oy: 0, duration: 15, startup: 6 },
                    up_neutral: { type: 'melee', dmg: 8, kb: 1.5, w: 3, h: 4, d: 2, ox: 1, oy: 2, duration: 14, startup: 5 },
                    down_neutral: { type: 'melee', dmg: 12, kb: 1.8, w: 4, h: 2, d: 2, ox: 0, oy: -1.5, duration: 16, startup: 7 },
                    special: { type: 'projectile', dmg: 12, kb: 2.0, vx: 0.6, vy: 0, w: 1.2, color: 0xFFFFFF, life: 50, duration: 20, startup: 8 }, 
                    up_special: { type: 'recovery_dash', dmg: 6, kb: 1.2, vx: 0.1, vy: 0.5, w: 3, h: 3, ox: 0, oy: 0, duration: 20, startup: 2 },
                    down_special: { type: 'projectile', dmg: 14, kb: 2.2, vx: 0, vy: -0.4, w: 1.5, color: 0xFFFFFF, life: 60, duration: 20, startup: 8 } 
                }
            },
            'invincible': { name: 'Invincible', color: 0xFFD700, skins: [0xFFD700, 0x1E90FF, 0xDC143C, 0x000000], speed: 0.25, jump: 0.45, weight: 0.9,
                skinNames: ['Classic Yellow', 'Blue Suit', 'Bloody Brawler', 'Viltrumite Empire'],
                icon: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invskinY.png',
                portraits: [
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invskinY.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invskinB.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invskinR.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invskinBl.png'
                ],
                modelUrls: {
                    'idle': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invinci%20idle.fbx',
                    'run': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invinciwalk.fbx',
                    'jump': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invinciboo.fbx',
                    'attack': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invincible%20attack.fbx',
                    'fall': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invinciboo.fbx',
                    'special': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/invincifly.fbx' 
                },
                modelScale: 0.03,
                modelRotationOffsets: {
                    'attack': 0,
                    'special': 0
                },
                skinUrls: [
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/inv.png', // Default
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/ChatGPT%20Image%20Jun%2012,%202026,%2008_07_48%20PM.png', // Blue
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/ChatGPT%20Image%20Jun%2012,%202026,%2008_10_18%20PM.png', // Red
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/ChatGPT%20Image%20Jun%2012,%202026,%2008_13_39%20PM.png'  // Black
                ],
                moves: { 
                    neutral: { type: 'melee', dmg: 8, kb: 1.4, w: 2.5, h: 2, d: 2, ox: 1.5, oy: 0, duration: 10, startup: 4 },
                    forward_neutral: { type: 'melee', dmg: 12, kb: 1.9, w: 3, h: 2.5, d: 2, ox: 2, oy: 0, duration: 14, startup: 6 },
                    up_neutral: { type: 'melee', dmg: 10, kb: 1.7, w: 2.5, h: 3.5, d: 2, ox: 1, oy: 2, duration: 12, startup: 5 },
                    down_neutral: { type: 'melee', dmg: 14, kb: 2.0, w: 4, h: 2, d: 2, ox: 1.5, oy: -1.5, duration: 16, startup: 7 },
                    special: { type: 'dash', dmg: 12, kb: 1.8, speed: 0.5, duration: 15, w: 3, h: 3, ox: 0, oy: 0 },
                    up_special: { type: 'recovery_dash', dmg: 10, kb: 1.5, vx: 0.3, vy: 0.5, duration: 25, startup: 2, w: 3, h: 3, ox: 0, oy: 0 },
                    down_special: { type: 'melee', dmg: 16, kb: 2.2, w: 6, h: 2, d: 4, ox: 0, oy: -1.5, duration: 20, startup: 8 }
                }
            },
            'cuphead': { name: 'Cuphead', color: 0xFF0000, skins: [0xFF0000, 0x0000FF, 0x32CD32, 0xFFFF00], speed: 0.20, jump: 0.36, weight: 0.85,
                skinNames: ['Red Cup', 'Mugman Blue', 'Elder Green', 'Legendary Chalice'],
                icon: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/CUPHEADIMAGER.png',
                portraits: [
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/CUPHEADIMAGER.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/CUPHEADIMAGEB.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/CUPHEADIMAGEG.png',
                    'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/CUPHEADIMAGEY.png'
                ],
                // Multiple FBX models array to handle Mixamo exports
                modelUrls: {
                    'idle': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/cuphead%20idle.fbx',
                    'run': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/cuphead%20run.fbx',
                    'jump': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/cuphead%20jump.fbx',
                    'attack': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/cuphead%20shoot.fbx',
                    'fall': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/cuphead%20fall.fbx',
                    'special': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/cuphead%20shoot.fbx' 
                },
                modelScale: 0.00025, 
                // Explicitly forcing every single animation to the correct small scale
                customModelScales: {
                    'idle': 0.00025,
                    'run': 0.00025,
                    'jump': 0.00025,
                    'attack': 0.00025,
                    'fall': 0.00025,
                    'special': 0.00025
                },
                modelRotationOffsets: {
                    'attack': -Math.PI / 2,
                    'special': -Math.PI / 2
                },
                
                // Specific materials to recolor when switching skins
                skinMaterials: ['PANTALON_rojoo', 'naeiz_roja'], 
                
                // Static image textures to map specifically to faces/body parts
                staticTextures: {
                    'MATERIAL_BLANCO_BRILLANTE.003': 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/poo.png'
                },
                // Textures that change depending on which skin is selected!
                multiSkinTextures: {
                    'Material.007': [
                        'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/Image_2.png', // 0: Red
                        'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/bu.png', // 1: Blue
                        'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/2026_06_12_0v4_Kleki.png', // 2: Green
                        'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/2026_06_12_0v4_Kleki1.png' // 3: Yellow
                    ]
                },
                moves: { 
                    neutral: { type: 'projectile', dmg: 4, kb: 0.5, vx: 0.5, vy: 0, w: 0.5, color: 0x87CEEB, life: 40, duration: 12, startup: 4 },
                    forward_neutral: { type: 'projectile', dmg: 6, kb: 1.0, vx: 0.6, vy: 0, w: 0.8, color: 0xFF4500, life: 30, duration: 15, startup: 5 },
                    up_neutral: { type: 'projectile', dmg: 5, kb: 1.2, vx: 0.2, vy: 0.6, w: 0.6, color: 0x87CEEB, life: 40, duration: 14, startup: 4 },
                    down_neutral: { type: 'melee', dmg: 8, kb: 1.5, w: 3, h: 2, d: 2, ox: 1.5, oy: -1, duration: 12, startup: 4 },
                    special: { type: 'projectile', dmg: 12, kb: 2.0, vx: 0.8, vy: 0, w: 1.2, color: 0xFFD700, life: 50, duration: 20, startup: 10 }, 
                    up_special: { type: 'recovery_dash', dmg: 8, kb: 1.2, vx: 0.2, vy: 0.45, w: 3, h: 3, ox: 0, oy: 0, duration: 18, startup: 2 },
                    down_special: { type: 'projectile', dmg: 15, kb: 2.5, vx: 0, vy: -0.5, w: 1.5, color: 0x444444, life: 80, duration: 15, startup: 8 } 
                }
            },
            'random': { name: 'Random', color: 0x444444, skins: [0x444444], isRandom: true }
        };

        // ==========================================
        // PROCEDURAL STAGE GENERATOR
        // ==========================================
        function generateStages() {
            const stages = {
                'arena': {
                    name: 'Indie Arena', desc: '(Super Indie Smash)', bgColor: 0x0f0f1a, bounds: { x: 45, y: 40, bottom: -20 },
                    platforms: [
                        { shape: 'box', x: 0, y: -2, z: 0, w: 36, h: 2, d: 12, color: 0x444466, type: 'main' },
                        { shape: 'box', x: -10, y: 5, z: 0, w: 10, h: 1, d: 6, color: 0x666688, type: 'pass-through' },
                        { shape: 'box', x: 10, y: 5, z: 0, w: 10, h: 1, d: 6, color: 0x666688, type: 'pass-through' },
                        { shape: 'box', x: 0, y: 12, z: 0, w: 10, h: 1, d: 6, color: 0x666688, type: 'pass-through' }
                    ],
                    decorations: [
                        // Big floating monitor/screen in BG
                        { shape: 'box', x: 0, y: 15, z: -25, w: 30, h: 16, d: 2, color: 0x111111 },
                        { shape: 'box', x: 0, y: 15, z: -24, w: 28, h: 14, d: 0.5, color: 0x00ccff, emissive: 0x00aaff, emissiveIntensity: 0.5 },
                        // Support beams
                        { shape: 'cylinder', x: -15, y: 5, z: -25, radius: 1, h: 40, color: 0x222222 },
                        { shape: 'cylinder', x: 15, y: 5, z: -25, radius: 1, h: 40, color: 0x222222 }
                    ]
                },
                'castle': {
                    name: 'Barbarian Keep', desc: '(Castle Crashers)', bgColor: 0x8ab3d4, bounds: { x: 45, y: 40, bottom: -20 },
                    platforms: [
                        { shape: 'box', x: 0, y: -2, z: 0, w: 42, h: 6, d: 14, color: 0x8b8989, type: 'main' }, // Stone wall
                        { shape: 'box', x: -14, y: 6, z: 0, w: 8, h: 1, d: 6, color: 0x6b4226, type: 'pass-through' }, // Wood platform
                        { shape: 'box', x: 14, y: 6, z: 0, w: 8, h: 1, d: 6, color: 0x6b4226, type: 'pass-through' } // Wood platform
                    ],
                    decorations: [
                        // Castle wall base extension
                        { shape: 'box', x: 0, y: -10, z: 0, w: 42, h: 10, d: 14, color: 0x7a7878 },
                        // Distant Castle Towers
                        { shape: 'cylinder', x: -25, y: 10, z: -20, radius: 6, h: 40, color: 0x707070 },
                        { shape: 'cone', x: -25, y: 35, z: -20, radius: 8, h: 15, segments: 8, color: 0x8b0000 },
                        { shape: 'cylinder', x: 25, y: 10, z: -20, radius: 6, h: 40, color: 0x707070 },
                        { shape: 'cone', x: 25, y: 35, z: -20, radius: 8, h: 15, segments: 8, color: 0x8b0000 },
                        // Grass in foreground below
                        { shape: 'box', x: 0, y: -6, z: 12, w: 60, h: 4, d: 10, color: 0x228b22 }
                    ]
                },
                'pvz': {
                    name: 'Front Yard', desc: '(Plants vs. Zombies)', bgColor: 0x5cb8ff, bounds: { x: 40, y: 40, bottom: -20 },
                    platforms: [ { shape: 'box', x: 0, y: -2, z: 0, w: 38, h: 4, d: 16, color: 0x32CD32, type: 'main' } ],
                    decorations: [
                        { shape: 'box', x: 0, y: -4, z: 0, w: 38, h: 4, d: 14, color: 0x5c3a21 }, // Dirt
                        // House Base
                        { shape: 'box', x: 0, y: 5, z: -18, w: 28, h: 14, d: 12, color: 0xe6d5ac }, 
                        // House Roof
                        { shape: 'cone', x: 0, y: 16, z: -18, radius: 22, h: 10, segments: 4, ry: Math.PI/4, color: 0x8b2a2a },
                        // Door
                        { shape: 'box', x: 0, y: 2, z: -11.9, w: 4, h: 8, d: 0.5, color: 0x4a2e15 },
                    ]
                },
                'csm': {
                    name: 'Devil Ruins', desc: '(Chainsaw Man)', bgColor: 0x110505, bounds: { x: 45, y: 40, bottom: -20 },
                    platforms: [
                        { shape: 'box', x: 0, y: -2, z: 0, w: 40, h: 4, d: 14, color: 0x2d2d3a, type: 'main' },
                        { shape: 'box', x: -12, y: 5, z: 0, w: 8, h: 1, d: 6, color: 0x444455, type: 'pass-through' },
                        { shape: 'box', x: 12, y: 5, z: 0, w: 8, h: 1, d: 6, color: 0x444455, type: 'pass-through' },
                        { shape: 'box', x: 0, y: 12, z: 0, w: 10, h: 1, d: 6, color: 0x444455, type: 'pass-through' }
                    ],
                    decorations: [
                        // Giant skyscrapers in background
                        { shape: 'box', x: -20, y: 10, z: -25, w: 16, h: 50, d: 16, color: 0x1a1a24 },
                        { shape: 'box', x: 10, y: 15, z: -30, w: 20, h: 60, d: 20, color: 0x15151e },
                        { shape: 'box', x: 30, y: 5, z: -20, w: 15, h: 40, d: 15, color: 0x1a1a24 },
                        // Neon trims / Blood rivers
                        { shape: 'box', x: 0, y: 0.1, z: 2, w: 40.2, h: 0.2, d: 2, color: 0xff0000, emissive: 0xff0000, emissiveIntensity: 0.4 },
                    ]
                },
                'jjba': {
                    name: 'Cairo Night', desc: "(JoJo's Bizarre Adv.)", bgColor: 0x05051a, bounds: { x: 45, y: 40, bottom: -20 },
                    platforms: [
                        { shape: 'box', x: 0, y: -2, z: 0, w: 40, h: 4, d: 15, color: 0x8b7355, type: 'main' },
                        { shape: 'box', x: -16, y: 6, z: 0, w: 8, h: 1, d: 6, color: 0x660066, type: 'pass-through' },
                        { shape: 'box', x: 16, y: 6, z: 0, w: 8, h: 1, d: 6, color: 0x660066, type: 'pass-through' }
                    ],
                    decorations: [
                        // DIO's Mansion Base
                        { shape: 'box', x: 0, y: 8, z: -20, w: 40, h: 20, d: 8, color: 0xaa8c66 },
                        // Road Roller (Frozen in air)
                        { shape: 'box', x: -15, y: 22, z: -10, w: 8, h: 5, d: 6, color: 0xffcc00, animated: 'float-slow-offset' },
                        { shape: 'cylinder', x: -15, y: 20, z: -10, radius: 3, h: 7, rz: Math.PI/2, color: 0x888888, animated: 'float-slow-offset' },
                        // Giant Moon
                        { shape: 'sphere', x: 20, y: 35, z: -40, radius: 10, color: 0xffffff, emissive: 0xffddaa, emissiveIntensity: 0.5 }
                    ]
                },
                'invincible': {
                    name: 'Earth Orbit', desc: '(Invincible)', bgColor: 0x000000, bounds: { x: 45, y: 45, bottom: -20 },
                    platforms: [
                        { shape: 'box', x: -12, y: -2, z: 0, w: 16, h: 2, d: 12, color: 0x8899aa, type: 'main' },
                        { shape: 'box', x: 12, y: -2, z: 0, w: 16, h: 2, d: 12, color: 0x8899aa, type: 'main' },
                        { shape: 'box', x: 0, y: 6, z: 0, w: 12, h: 1, d: 10, color: 0x3366ff, type: 'pass-through' } 
                    ],
                    decorations: [
                        // Earth
                        { shape: 'sphere', x: 0, y: -65, z: -40, radius: 50, color: 0x0055ff, emissive: 0x0022aa, emissiveIntensity: 0.4 },
                        // Orbital Ring
                        { shape: 'torus', x: 0, y: -20, z: -40, radius: 70, tube: 2, rx: Math.PI/2.2, color: 0x556677 },
                    ]
                },
                'cuphead': {
                    name: 'Devil\'s Casino', desc: '(Cuphead)', bgColor: 0x220505, bounds: { x: 40, y: 45, bottom: -20 },
                    platforms: [
                        // Giant Roulette Wheel Base
                        { shape: 'cylinder', x: 0, y: -4, z: 0, radius: 22, h: 4, color: 0x333333, type: 'main' },
                        { shape: 'box', x: -10, y: 6, z: 0, w: 6, h: 1, d: 6, color: 0xffffff, type: 'pass-through' },
                        { shape: 'box', x: 10, y: 6, z: 0, w: 6, h: 1, d: 6, color: 0xffffff, type: 'pass-through' },
                    ],
                    decorations: [
                        // Giant Dice
                        { shape: 'box', x: -18, y: 5, z: -15, w: 10, h: 10, d: 10, rx: 0.5, ry: 0.8, color: 0xffffff, animated: 'spin-float' },
                        { shape: 'box', x: 18, y: 15, z: -20, w: 8, h: 8, d: 8, rx: 1.2, ry: 0.3, color: 0xffffff, animated: 'spin-float-offset' }
                    ]
                }
            };

            // PROCEDURALLY ADD MASSIVE DETAIL (Hundreds of objects injected cleanly)

            // Arena Details (Neon floating cubes)
            for(let i=0; i<20; i++) {
                stages['arena'].decorations.push({ shape: 'box', x: (Math.random()-0.5)*60, y: Math.random()*30, z: -15 - Math.random()*20, w: 1, h: 1, d: 1, rx: Math.random(), ry: Math.random(), color: 0x00ffff, emissive: 0x0088ff, emissiveIntensity: 0.8, animated: 'spin-float' });
            }

            // Castle Details (Battlements and background trees)
            for(let i = -20; i <= 20; i += 4) {
                stages['castle'].decorations.push({ shape: 'box', x: i, y: 2, z: -6, w: 2, h: 2, d: 2, color: 0x8b8989 }); // Crenellations along back wall
            }
            for(let i = -30; i <= 30; i += 8) {
                if(Math.abs(i) < 22) continue; // Don't block middle too much
                stages['castle'].decorations.push({ shape: 'cylinder', x: i, y: 2, z: -15, radius: 1, h: 10, color: 0x5c4033 }); // Trunk
                stages['castle'].decorations.push({ shape: 'cone', x: i, y: 12, z: -15, radius: 4, h: 15, segments: 6, color: 0x2e8b57 }); // Leaves
            }

            // PvZ Details (Fence, Windows, Sunflowers)
            for(let i = -18; i <= 18; i += 2) {
                stages['pvz'].decorations.push({ shape: 'box', x: i, y: 1.5, z: -11, w: 0.5, h: 3, d: 0.2, color: 0xffffff }); // Picket Fence
            }
            stages['pvz'].decorations.push({ shape: 'box', x: 0, y: 1, z: -11, w: 38, h: 0.3, d: 0.4, color: 0xffffff }); // Fence rail
            // House Windows
            stages['pvz'].decorations.push({ shape: 'box', x: -8, y: 7, z: -11.9, w: 4, h: 4, d: 0.2, color: 0xffff88, emissive: 0xffff88, emissiveIntensity: 0.6 });
            stages['pvz'].decorations.push({ shape: 'box', x: 8, y: 7, z: -11.9, w: 4, h: 4, d: 0.2, color: 0xffff88, emissive: 0xffff88, emissiveIntensity: 0.6 });
            // Tree
            stages['pvz'].decorations.push({ shape: 'cylinder', x: -16, y: 4, z: -8, radius: 1, h: 12, color: 0x4a2e15 }); // Trunk
            stages['pvz'].decorations.push({ shape: 'sphere', x: -16, y: 12, z: -8, radius: 5, color: 0x228b22 }); // Leaves

            // CSM Details (Hundreds of glowing windows on skyscrapers, rubble)
            for(let y = 0; y < 40; y += 4) {
                for(let x = -25; x < -15; x += 3) {
                    if(Math.random() > 0.4) stages['csm'].decorations.push({ shape: 'box', x: x, y: y, z: -16.9, w: 1, h: 1.5, d: 0.2, color: 0xffaa00, emissive: 0xffaa00, emissiveIntensity: 0.8 });
                }
                for(let x = 3; x < 17; x += 3) {
                    if(Math.random() > 0.5) stages['csm'].decorations.push({ shape: 'box', x: x, y: y+5, z: -19.9, w: 1.2, h: 1.2, d: 0.2, color: 0xff5500, emissive: 0xff5500, emissiveIntensity: 0.7 });
                }
            }
            // Debris
            for(let i=0; i<15; i++) {
                stages['csm'].decorations.push({ shape: 'box', x: (Math.random()-0.5)*40, y: -2 + Math.random()*2, z: (Math.random()-0.5)*12, w: Math.random()*3+1, h: Math.random()*2+0.5, d: Math.random()*3+1, rx: Math.random(), ry: Math.random(), color: 0x333344 });
            }

            // JJBA Details (Mansion pillars, Street lamps)
            for(let i = -18; i <= 18; i += 6) {
                stages['jjba'].decorations.push({ shape: 'cylinder', x: i, y: 8, z: -15, radius: 1.5, h: 20, color: 0xc2a47c }); // Pillars
            }
            stages['jjba'].decorations.push({ shape: 'box', x: 0, y: 18, z: -15, w: 42, h: 2, d: 4, color: 0x8b7355 }); // Balcony
            // Street lamps
            stages['jjba'].decorations.push({ shape: 'cylinder', x: -18, y: 3, z: -5, radius: 0.2, h: 10, color: 0x333 });
            stages['jjba'].decorations.push({ shape: 'sphere', x: -18, y: 8, z: -5, radius: 0.8, color: 0xffddaa, emissive: 0xffddaa, emissiveIntensity: 1 });

            // Invincible Details (Earth Continents, Satellites)
            for(let i=0; i<8; i++) { // Continents
                stages['invincible'].decorations.push({ shape: 'sphere', x: (Math.random()-0.5)*40, y: -65 + (Math.random()*20), z: -20 + (Math.random()*-20), radius: 15 + Math.random()*10, color: 0x008822 });
            }
            // Satellites
            stages['invincible'].decorations.push({ shape: 'box', x: -25, y: 15, z: -20, w: 2, h: 2, d: 2, color: 0xffffff, animated: 'float-slow' });
            stages['invincible'].decorations.push({ shape: 'box', x: -25, y: 15, z: -20, w: 10, h: 0.2, d: 4, color: 0x2244ff, animated: 'float-slow' }); // Solar panel
            stages['invincible'].decorations.push({ shape: 'box', x: 25, y: -5, z: -15, w: 3, h: 3, d: 3, color: 0xaa2222, animated: 'float-slow-offset' }); // Viltrumite ship core

            // Cuphead Details (Roulette wedges, Poker Chips)
            for(let i=0; i<16; i++) {
                let angle = (i / 16) * Math.PI * 2;
                let cColor = i % 2 === 0 ? 0xaa0000 : 0x111111;
                stages['cuphead'].decorations.push({ shape: 'box', x: Math.cos(angle)*15, y: -1.9, z: Math.sin(angle)*15, w: 6, h: 0.2, d: 8, ry: -angle, color: cColor });
            }
            // Stacks of Chips
            for(let i=0; i<5; i++) {
                stages['cuphead'].decorations.push({ shape: 'cylinder', x: 22, y: -5 + (i*1.5), z: -10, radius: 4, h: 1, color: 0x0055aa });
                stages['cuphead'].decorations.push({ shape: 'cylinder', x: -25, y: -2 + (i*1.5), z: -5, radius: 4, h: 1, color: 0xaa0000 });
            }

            return stages;
        }

        let STAGES = generateStages();
        STAGES.invincible = {
            id: 'invincible', name: 'Earth Orbit', desc: 'A battle stage set in orbit around Earth.', bgColor: 0x193976,
            backgroundImageUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/stars-galaxy-3840x2160-10307.jpg',
            skyboxUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/stars-galaxy-3840x2160-10307.jpg', skyboxSpinSpeed: 1,
            lighting: { ambientColor: '#ffffff', ambientIntensity: 0.4, directionalColor: '#ffffff', directionalIntensity: 0.8, directionalPosition: { x: 20, y: 40, z: 20 } },
            bounds: { x: 45, y: 40, bottom: -20 },
            platforms: [
                { name: 'Platform 1', shape: 'box', type: 'main', x: -24.47814921773496, y: 5.084948727127346, z: 0, w: 12, h: 1, d: 6, color: 0x667799, collision: { enabled: true, x: -24.47814921773496, y: 5.084948727127346, w: 12, h: 1, d: 6, type: 'main' }, textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/1000_F_474082237_1XCEbnRln2L2Rd8LdikqhKDv6PqjgsoZ.jpg' },
                { name: 'Platform 2', shape: 'box', type: 'main', x: 0.73, y: -8.05, z: 0, w: 24, h: 1, d: 6, color: 0x667799, collision: { enabled: true, x: 0.73, y: -8.05, w: 24, h: 1, d: 6, type: 'main' }, textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/1000_F_474082237_1XCEbnRln2L2Rd8LdikqhKDv6PqjgsoZ.jpg' },
                { name: 'Platform 3', shape: 'box', type: 'main', x: 28.69, y: 5.88, z: 0, w: 12, h: 1, d: 6, color: 0x667799, collision: { enabled: true, x: 28.69, y: 5.88, w: 12, h: 1, d: 6, type: 'main' }, textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/1000_F_474082237_1XCEbnRln2L2Rd8LdikqhKDv6PqjgsoZ.jpg' }
            ],
            decorations: [
                { name: 'Object 1', shape: 'box', color: 0x597090, x: 2.02, y: 2.34, z: -17, w: 0, h: 10, d: 10, modelUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/ps1_style_low_poly_earth.glb', scale: 1, spin: { type: 'spin', axis: 'y', speed: -10 } }
            ],
            backgroundLayers: [],
            spawnPoints: [
                { x: -24.47814921773496, y: 7.334948727127346 },
                { x: -4.27, y: -5.8 },
                { x: 5.73, y: -5.8 },
                { x: 28.69, y: 8.13 }
            ]
        };
        STAGES.arena = {
            id: 'arena', name: 'Indie Smash', desc: 'Built with Stage Builder', bgColor: parseColor('#101827'),
            skyboxUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/pngtree-panoramic-skybox-texture-sunset-with-clouds-image_17089737.jpg', skyboxSpinSpeed: 2,
            lighting: { ambientColor: '#ffffff', ambientIntensity: 0.4, directionalColor: '#ffffff', directionalIntensity: 0.8, directionalPosition: { x: 20, y: 40, z: 20 } },
            bounds: { x: 45, y: 40, bottom: -20 },
            platforms: [
                { name: 'Platform 1', shape: 'cylinder', type: 'main', x: 1.8775783195434717, y: 4.457270127696098, z: 0, w: 50, h: 1, d: 6, color: parseColor('#a2b0cd'), collision: { enabled: true, x: 1.8775783195434717, y: 4.707270127696098, w: 50, h: 1, d: 6, type: 'main' }, textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/R%20(1).jpg', scale: 1 },
                { name: 'Platform 2', shape: 'box', type: 'main', x: -30.718385926302894, y: 8.60381143515924, z: 0, w: 12, h: 1, d: 6, color: parseColor('#667799'), collision: { enabled: true, x: -30.718385926302894, y: 8.60381143515924, w: 12, h: 1, d: 6, type: 'main' }, textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/R%20(1).jpg', scale: 1 },
                { name: 'Platform 3', shape: 'box', type: 'main', x: 33.896138673711896, y: 9.073669935156344, z: 0, w: 12, h: 1, d: 6, color: parseColor('#667799'), collision: { enabled: true, x: 33.896138673711896, y: 9.073669935156344, w: 12, h: 1, d: 6, type: 'main' }, textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/R%20(1).jpg', scale: 1 }
            ],
            decorations: [
                { name: 'Object 1', shape: 'cone', color: parseColor('#597090'), x: -18.98, y: 16.82, z: -12, w: 5, h: 5, d: 2, textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/stars-galaxy-3840x2160-10307.jpg', scale: 1.002, spin: { type: 'spin', axis: 'x', speed: 90 } },
                { name: 'Object 2', shape: 'box', color: parseColor('#597090'), x: 21.064176156439135, y: 25.202820360891536, z: -12, w: 5, h: 5, d: 2, textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/stars-galaxy-3840x2160-10307.jpg', scale: 1.002, spin: { type: 'spin', axis: 'y', speed: 90 } },
                { name: 'Object 3', shape: 'sphere', color: parseColor('#597090'), x: -34.76, y: 25.8, z: -12, w: 5, h: 5, d: 2, textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/stars-galaxy-3840x2160-10307.jpg', scale: 1.002, spin: { type: 'spin', axis: 'z', speed: 90 } },
                { name: 'Object 4', shape: 'cylinder', color: parseColor('#597090'), x: 25.33, y: 13.92, z: -12, w: 5, h: 5, d: 2, textureUrl: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/stars-galaxy-3840x2160-10307.jpg', scale: 1.002, spin: { type: 'spin', axis: 'x', speed: 81 } }
            ],
            backgroundLayers: [
                { url: 'https://raw.githubusercontent.com/AxolotolModder/YouVsHomer/main/10-59-55-818_512.gif', width: 40, height: 40, x: 2.24, y: 29.68, z: -30, opacity: 1 }
            ]
        };

        // ==========================================
        // GLOBAL VARIABLES
        // ==========================================
        let scene, camera, renderer;
        let stageAmbientLight, stageDirectionalLight, stageSkyboxMesh = null, stageSkyboxSpinSpeed = 0;
        let lastAnimationTimestamp = performance.now();
        let gameState = 'menu'; // menu, select, playing, result
        let currentStageId = null;
        
        let players = [];
        let stageMeshes = [];
        let decorationMeshes = [];
        let projectiles = [];
        let hitboxes = [];
        let bgStars;

        let globalTime = 0; 

        // Menu & 4-Player States
        let activeScreen = 'title-screen';
        let pSelections = [null, null, null, null];
        let pSkins = [0, 0, 0, 0];
        let pTypes = [0, 0, -1, -1]; // 0 = HMN, 1-9 = CPU, -1 = N/A
        let cursors = [0, 0, 0, 0];
        let menuDelay = [0, 0, 0, 0];
        let stageCursor = 0; // Fixes the missing variable error!

        // Direct online play uses WebRTC data channels. Offer/answer codes are exchanged manually,
        // so the game can remain a single self-contained HTML file without a matchmaking server.
        let onlineRole = 'offline'; // offline, host, guest
        let onlinePeer = null;
        let onlineChannel = null;
        let onlineInputTimer = null;
        let onlineSnapshotTimer = null;
        let onlinePendingRemoteCharacter = null;
        let onlineRemoteInput = { left:false, right:false, up:false, down:false, attack:false, special:false, finalSmash:false };
        let onlineMatchStarted = false;
        let onlineSnapshotSequence = 0;
        let onlineLastSnapshotSequence = 0;

        // Input state
        const keys = {
            p1: { left: false, right: false, up: false, down: false, attack: false, special: false, finalSmash: false },
            p2: { left: false, right: false, up: false, down: false, attack: false, special: false, finalSmash: false },
            p3: { left: false, right: false, up: false, down: false, attack: false, special: false, finalSmash: false },
            p4: { left: false, right: false, up: false, down: false, attack: false, special: false, finalSmash: false }
        };

        const padKeys = {
            p1: { left: false, right: false, up: false, down: false },
            p2: { left: false, right: false, up: false, down: false },
            p3: { left: false, right: false, up: false, down: false },
            p4: { left: false, right: false, up: false, down: false }
        };
        
        const prevPadState = { 
            0: { jump: false, attack: false, special: false, finalSmash: false }, 
            1: { jump: false, attack: false, special: false, finalSmash: false },
            2: { jump: false, attack: false, special: false, finalSmash: false },
            3: { jump: false, attack: false, special: false, finalSmash: false }
        };

        let finalSmashSequence = null;
        let smashBall = null;
        let smashBallSpawnCountdown = 9;
        let smashBallNoticeTimer = null;
        const FINAL_SMASHES = {
            peashooter: { name: 'Pea-Pocalypse', subtitle: 'Charged Sun Pea — Fire!', style: 'pea-cannon', color: 0x7CFC00, range: 32, height: 10, hitTimes: [1.72], damage: 36, knockback: 5.4, duration: 3.65 },
            denji: { name: 'Chainsaw Devil: Rip & Tear', subtitle: 'No brakes. No mercy.', style: 'chainsaw', color: 0xEF4444, range: 18, height: 12, hitTimes: [0.92, 1.12, 1.32, 1.52, 1.72, 1.92], damage: 6.5, knockback: 4.1, duration: 4.05 },
            jotaro: { name: 'Star Platinum: The World', subtitle: 'Time has stopped.', style: 'time-stop', color: 0xC4B5FD, range: 30, height: 30, radial: true, hitTimes: [3.12], damage: 54, knockback: 7.4, duration: 4.5 },
            knight: { name: 'Elemental Convergence', subtitle: 'All four elements. One strike.', style: 'elemental', color: 0x60A5FA, range: 25, height: 16, radial: true, hitTimes: [1.48, 2.02, 2.56], damage: 14, knockback: 4.8, duration: 4.05 },
            invincible: { name: 'Viltrumite Worldbreaker', subtitle: 'I can see the whole world from here.', style: 'meteor', color: 0xFACC15, range: 36, height: 24, radial: true, hitTimes: [2.42], damage: 54, knockback: 8, duration: 4.35 },
            cuphead: { name: 'Devil’s Due: Soul Contract', subtitle: 'One last deal with the Devil.', style: 'devil-contract', color: 0xF87171, range: 30, height: 18, hitTimes: [1.42, 1.66, 1.90], damage: 15, knockback: 4.5, duration: 4.15 }
        };

        function showSmashBallNotice(message, duration = 1800) {
            const notice = document.getElementById('smash-ball-notice');
            if (!notice) return;
            notice.innerText = message;
            notice.classList.remove('hidden');
            clearTimeout(smashBallNoticeTimer);
            smashBallNoticeTimer = setTimeout(() => notice.classList.add('hidden'), duration);
        }

        function createSmashBall() {
            const root = new THREE.Group();
            const coreMaterial = new THREE.MeshStandardMaterial({ color: 0xfafafa, emissive: 0xffb300, emissiveIntensity: 1.4, metalness: 0.45, roughness: 0.18 });
            const core = new THREE.Mesh(new THREE.SphereGeometry(1.45, 24, 18), coreMaterial);
            root.add(core);
            const glow = new THREE.PointLight(0xffb300, 2.5, 15);
            root.add(glow);
            const rings = [];
            for (let i = 0; i < 3; i++) {
                const ring = new THREE.Mesh(new THREE.TorusGeometry(1.9 + i * 0.16, 0.09, 8, 40), new THREE.MeshBasicMaterial({ color: [0xffd43b, 0xffffff, 0xff5d35][i], transparent: true, opacity: 0.9 }));
                ring.rotation.set(i * 0.8, i * 0.55, i * 0.4);
                root.add(ring);
                rings.push(ring);
            }
            const canvas = document.createElement('canvas');
            canvas.width = 512; canvas.height = 192;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineJoin = 'round'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            ctx.font = '900 112px Arial'; ctx.lineWidth = 20; ctx.strokeStyle = '#7f1d1d'; ctx.strokeText('SMASH', 256, 96);
            ctx.fillStyle = '#fff7cc'; ctx.fillText('SMASH', 256, 96);
            const labelTexture = new THREE.CanvasTexture(canvas);
            const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTexture, transparent: true, depthTest: false }));
            label.scale.set(4.5, 1.7, 1); label.position.z = 2.05; root.add(label);
            root.position.set(0, 16, 0.5);
            root.userData.rings = rings;
            scene.add(root);
            return { root, health: 42, maxHealth: 42, radius: 2.1, hitCooldown: 0, lastOwner: null, age: 0, originX: 0, originY: 16 };
        }

        function spawnSmashBall() {
            const stage = STAGES[currentStageId];
            const bound = Math.min(27, (stage && stage.bounds && stage.bounds.x) || 45);
            smashBall = createSmashBall();
            smashBall.originX = (Math.random() * 1.4 - 0.7) * bound;
            smashBall.originY = 12 + Math.random() * 11;
            smashBall.root.position.set(smashBall.originX, smashBall.originY, 0.5);
            showSmashBallNotice('Smash Ball appeared! Break it to claim your Final Smash!');
        }

        function removeSmashBall() {
            if (!smashBall) return;
            scene.remove(smashBall.root);
            smashBall.root.traverse(node => {
                if (node.material) {
                    if (node.material.map) node.material.map.dispose();
                    node.material.dispose();
                }
                if (node.geometry) node.geometry.dispose();
            });
            smashBall = null;
        }

        function breakSmashBall(ownerId) {
            if (!smashBall) return;
            const x = smashBall.root.position.x, y = smashBall.root.position.y;
            const owner = players.find(player => player.pIndex === ownerId && player.stocks > 0);
            removeSmashBall();
            createHitEffect(x, y, 8);
            if (owner) {
                owner.finalSmashCharge = 100;
                showSmashBallNotice(`${owner.data.name} claimed the Smash Ball! Final Smash ready!`, 2400);
            } else {
                showSmashBallNotice('The Smash Ball broke!');
            }
            smashBallSpawnCountdown = 8 + Math.random() * 9;
        }

        function updateSmashBall(deltaSeconds) {
            if (!smashBall) {
                if (onlineRole === 'guest') return; // Wait for the host's authoritative spawn.
                smashBallSpawnCountdown -= deltaSeconds;
                if (smashBallSpawnCountdown <= 0) spawnSmashBall();
                return;
            }
            smashBall.age += deltaSeconds;
            smashBall.hitCooldown = Math.max(0, smashBall.hitCooldown - deltaSeconds);
            smashBall.root.position.x = smashBall.originX + Math.sin(smashBall.age * 0.8) * 5.5;
            smashBall.root.position.y = smashBall.originY + Math.sin(smashBall.age * 1.65) * 1.6;
            smashBall.root.rotation.y += deltaSeconds * 1.7;
            smashBall.root.rotation.z += deltaSeconds * 0.7;
            smashBall.root.userData.rings.forEach((ring, index) => { ring.rotation[index === 0 ? 'x' : index === 1 ? 'y' : 'z'] += deltaSeconds * (index % 2 ? -1 : 1) * (1.4 + index * 0.35); });
            if (smashBall.age > 18) {
                removeSmashBall();
                smashBallSpawnCountdown = 5 + Math.random() * 8;
                showSmashBallNotice('The Smash Ball flew away! Watch for another one.');
            }
        }

        // ==========================================
        // UI MANAGEMENT
        // ==========================================

        function togglePlayerType(e, pIndex) {
            e.stopPropagation();
            
            // Cycle: N/A (-1) -> HMN (0) -> LV 1 -> LV 3 -> LV 5 -> LV 7 -> LV 9 -> N/A (-1)
            if (pTypes[pIndex] === -1) pTypes[pIndex] = 0;
            else if (pTypes[pIndex] === 0) pTypes[pIndex] = 1;
            else if (pTypes[pIndex] === 1) pTypes[pIndex] = 3;
            else if (pTypes[pIndex] === 3) pTypes[pIndex] = 5;
            else if (pTypes[pIndex] === 5) pTypes[pIndex] = 7;
            else if (pTypes[pIndex] === 7) pTypes[pIndex] = 9;
            else pTypes[pIndex] = -1;

            if (pIndex === 0 && pTypes[pIndex] === -1) pTypes[pIndex] = 0; // P1 always plays

            const panel = document.getElementById(`panel-p${pIndex+1}`);
            const btn = document.getElementById(`p${pIndex+1}-type-btn`);
            
            if (pTypes[pIndex] === -1) {
                btn.innerText = 'N/A';
                btn.className = 'absolute top-0 left-2 bg-gray-500 text-black font-black text-sm px-4 py-0.5 border-b-2 border-r-2 border-gray-300 z-40 cursor-pointer';
                panel.classList.add('opacity-50', 'grayscale');
                // clear selection
                pSelections[pIndex] = null;
                document.getElementById(`name-box-p${pIndex+1}`).classList.add('hidden');
                document.getElementById(`portrait-p${pIndex+1}`).style.opacity = '0';
                document.getElementById(`skin-hint-p${pIndex+1}`).classList.add('hidden');
                document.querySelectorAll(`.p${pIndex+1}-cursor`).forEach(c => c.classList.add('hidden'));
            } else {
                panel.classList.remove('opacity-50', 'grayscale');
                document.getElementById(`name-box-p${pIndex+1}`).classList.remove('hidden');
                if (pTypes[pIndex] > 0) {
                    btn.innerText = 'LV ' + pTypes[pIndex];
                    let colorClass = 'bg-gray-500 hover:bg-gray-400 border-gray-400';
                    if (pTypes[pIndex] === 3) colorClass = 'bg-green-600 hover:bg-green-500 border-green-400';
                    if (pTypes[pIndex] === 5) colorClass = 'bg-yellow-500 hover:bg-yellow-400 border-yellow-300 text-black';
                    if (pTypes[pIndex] === 7) colorClass = 'bg-orange-600 hover:bg-orange-500 border-orange-400';
                    if (pTypes[pIndex] === 9) colorClass = 'bg-red-700 hover:bg-red-600 border-red-400 text-white shadow-[0_0_15px_rgba(220,38,38,0.8)]';
                    btn.className = `absolute top-0 left-2 font-black text-sm px-2 py-0.5 border-b-2 border-r-2 z-40 cursor-pointer transition-all ${colorClass}`;
                    if (pTypes[pIndex] !== 5) btn.classList.add('text-white');
                } else {
                    btn.innerText = 'HMN';
                    btn.className = 'absolute top-0 left-2 bg-blue-600 text-white font-black text-sm px-4 py-0.5 border-b-2 border-r-2 border-blue-400 z-40 cursor-pointer transition-colors hover:bg-blue-500';
                }
            }
            checkReadyState();
        }

        function checkReadyState() {
            let allReady = true;
            let activePlayers = 0;
            for(let i=0; i<4; i++) {
                if(pTypes[i] !== -1) {
                    activePlayers++;
                    if(!pSelections[i]) allReady = false;
                }
            }
            if(allReady && activePlayers >= 2) {
                document.getElementById('ready-banner').classList.remove('hidden');
            } else {
                document.getElementById('ready-banner').classList.add('hidden');
            }
        }

        function openOnlineModal() {
            document.getElementById('online-modal').classList.remove('hidden');
            showOnlineView('home');
            if (onlinePeer) setOnlineStatus(`Connection: ${onlinePeer.connectionState}.`);
        }

        function closeOnlineModal() {
            document.getElementById('online-modal').classList.add('hidden');
        }

        function showOnlineView(view) {
            document.querySelectorAll('.online-view').forEach(panel => panel.classList.toggle('hidden', panel.id !== `online-view-${view}`));
            document.querySelectorAll('.online-nav').forEach(button => button.classList.toggle('active', button.dataset.onlineView === view));
            if (view === 'direct') setOnlineStatus(onlinePeer ? `Connection: ${onlinePeer.connectionState}.` : 'Choose Host or Join to begin.');
        }

        function setLobbySetupStatus() {
            const message = 'Lobby service is not configured yet. Direct Connect is available while we connect the shared lobby backend.';
            const createNote = document.getElementById('online-create-note');
            const joinNote = document.getElementById('online-join-note');
            const publicNote = document.getElementById('online-public-note');
            if (createNote && !document.getElementById('online-view-create').classList.contains('hidden')) createNote.textContent = message;
            if (joinNote && !document.getElementById('online-view-join').classList.contains('hidden')) joinNote.textContent = message;
            if (publicNote && !document.getElementById('online-view-public').classList.contains('hidden')) publicNote.textContent = message;
        }

        function joinOnlineLobbyByCode() {
            const input = document.getElementById('online-join-code');
            const code = input ? input.value.trim() : '';
            const note = document.getElementById('online-join-note');
            if (!/^\d{6}$/.test(code)) {
                if (note) note.textContent = 'Enter all six digits of the lobby code.';
                if (input) input.focus();
                return;
            }
            setLobbySetupStatus();
        }

        function setOnlineStatus(message, isError = false) {
            const status = document.getElementById('online-status');
            if (status) {
                status.textContent = message;
                status.className = `mt-4 min-h-6 text-sm font-bold ${isError ? 'text-red-300' : 'text-cyan-200'}`;
            }
        }

        function startLocalMatch() {
            disconnectOnlineMatch();
            pTypes = [0, 0, -1, -1];
            [1, 2].forEach(player => {
                const button = document.getElementById(`p${player}-type-btn`);
                button.textContent = 'HMN';
                button.style.pointerEvents = '';
            });
            goToScreen('title-screen');
            goToScreen('character-select');
        }

        function prepareOnlineRoster(role) {
            pTypes = role === 'host' ? [0, -1, -1, -1] : [-1, 0, -1, -1];
            goToScreen('title-screen');
            goToScreen('character-select');
            const remotePlayer = role === 'host' ? 2 : 1;
            const remoteButton = document.getElementById(`p${remotePlayer}-type-btn`);
            remoteButton.textContent = 'REMOTE';
            remoteButton.style.pointerEvents = 'none';
            const localButton = document.getElementById(`p${role === 'host' ? 1 : 2}-type-btn`);
            localButton.textContent = 'HMN';
            localButton.style.pointerEvents = 'none';
            document.getElementById('online-match-badge').textContent = role === 'host' ? 'ONLINE • YOU ARE PLAYER 1' : 'ONLINE • YOU ARE PLAYER 2';
            document.getElementById('online-match-badge').classList.remove('hidden');
            document.getElementById('online-role-label').textContent = role === 'host' ? 'Host • You are P1' : 'Guest • You are P2';
            closeOnlineModal();
        }

        function sendOnlineMessage(message) {
            if (onlineChannel && onlineChannel.readyState === 'open') onlineChannel.send(JSON.stringify(message));
        }

        function waitForIceGathering(peer) {
            if (peer.iceGatheringState === 'complete') return Promise.resolve();
            return new Promise((resolve, reject) => {
                const timeout = setTimeout(() => reject(new Error('ICE gathering timed out. Try generating the code again.')), 20000);
                const done = () => {
                    if (peer.iceGatheringState !== 'complete') return;
                    clearTimeout(timeout);
                    peer.removeEventListener('icegatheringstatechange', done);
                    resolve();
                };
                peer.addEventListener('icegatheringstatechange', done);
            });
        }

        function createOnlinePeer(role) {
            if (!window.RTCPeerConnection) throw new Error('This browser does not support WebRTC. Try current Chrome or Edge.');
            disconnectOnlineMatch(false);
            onlineRole = role;
            onlinePeer = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
            onlinePeer.onconnectionstatechange = () => {
                setOnlineStatus(`Connection state: ${onlinePeer.connectionState}.`);
                if (onlinePeer.connectionState === 'failed') setOnlineStatus('Connection failed. Your networks may require a TURN relay.', true);
                if (onlinePeer.connectionState === 'disconnected') setOnlineStatus('Opponent disconnected or network stalled.', true);
            };
            onlinePeer.ondatachannel = event => wireOnlineChannel(event.channel);
            onlineInputTimer = setInterval(sendOnlineInput, 50);
            onlineSnapshotTimer = setInterval(sendOnlineSnapshot, 33);
            return onlinePeer;
        }

        function wireOnlineChannel(channel) {
            onlineChannel = channel;
            channel.onopen = () => {
                setOnlineStatus('Connected! Opening character select…');
                prepareOnlineRoster(onlineRole);
            };
            channel.onclose = () => setOnlineStatus('Peer connection closed.', true);
            channel.onerror = () => setOnlineStatus('Data channel error.', true);
            channel.onmessage = event => {
                let message;
                try { message = JSON.parse(event.data); } catch { return; }
                handleOnlineMessage(message);
            };
        }

        async function createOnlineOffer() {
            try {
                setOnlineStatus('Creating host offer…');
                const peer = createOnlinePeer('host');
                wireOnlineChannel(peer.createDataChannel('brawl', { ordered: true }));
                await peer.setLocalDescription(await peer.createOffer());
                await waitForIceGathering(peer);
                document.getElementById('online-offer-out').value = JSON.stringify({ type:peer.localDescription.type, sdp:peer.localDescription.sdp });
                document.getElementById('online-role-label').textContent = 'Hosting • Offer ready';
                setOnlineStatus('Send the offer code to the other player. Paste their answer here after they create it.');
            } catch (error) { setOnlineStatus(error.message || 'Could not create the offer.', true); }
        }

        async function createOnlineAnswer() {
            try {
                const offer = JSON.parse(document.getElementById('online-offer-in').value.trim());
                if (!offer || offer.type !== 'offer' || !offer.sdp) throw new Error('That does not look like a host offer code.');
                setOnlineStatus('Preparing your answer…');
                const peer = createOnlinePeer('guest');
                await peer.setRemoteDescription(offer);
                const answer = await peer.createAnswer();
                await peer.setLocalDescription(answer);
                await waitForIceGathering(peer);
                document.getElementById('online-answer-out').value = JSON.stringify({ type:peer.localDescription.type, sdp:peer.localDescription.sdp });
                document.getElementById('online-role-label').textContent = 'Joining • Answer ready';
                setOnlineStatus('Send the answer code back to the host and wait for the connection.');
            } catch (error) { setOnlineStatus(error.message || 'Could not create an answer.', true); }
        }

        async function acceptOnlineAnswer() {
            try {
                if (!onlinePeer || onlineRole !== 'host') throw new Error('Create an offer before connecting.');
                const answer = JSON.parse(document.getElementById('online-answer-in').value.trim());
                if (!answer || answer.type !== 'answer' || !answer.sdp) throw new Error('That does not look like a join code.');
                await onlinePeer.setRemoteDescription(answer);
                setOnlineStatus('Answer accepted. Connecting to the other player…');
            } catch (error) { setOnlineStatus(error.message || 'Could not accept the answer.', true); }
        }

        async function copyOnlineField(id) {
            const field = document.getElementById(id);
            if (!field.value) { setOnlineStatus('Create a connection code first.', true); return; }
            field.focus(); field.select();
            try {
                if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(field.value);
                else if (!document.execCommand('copy')) throw new Error('Copy was blocked');
                setOnlineStatus('Code copied. Send it to the other player.');
            } catch { setOnlineStatus('Code selected. Copy it with Ctrl+C and send it to the other player.'); }
        }

        function disconnectOnlineMatch(resetRole = true) {
            clearInterval(onlineInputTimer); clearInterval(onlineSnapshotTimer);
            onlineInputTimer = onlineSnapshotTimer = null;
            if (onlineChannel) { onlineChannel.onmessage = null; onlineChannel.close(); }
            if (onlinePeer) onlinePeer.close();
            onlineChannel = null; onlinePeer = null; onlinePendingRemoteCharacter = null;
            onlineMatchStarted = false;
            onlineRemoteInput = { left:false, right:false, up:false, down:false, attack:false, special:false, finalSmash:false };
            onlineSnapshotSequence = 0;
            onlineLastSnapshotSequence = 0;
            if (resetRole) {
                onlineRole = 'offline';
                document.getElementById('online-match-badge').classList.add('hidden');
                ['p1','p2'].forEach(id => Object.keys(keys[id]).forEach(action => { keys[id][action] = false; }));
                ['p1','p2'].forEach(id => Object.keys(padKeys[id]).forEach(action => { padKeys[id][action] = false; }));
                document.getElementById('online-role-label').textContent = 'Offline';
                setOnlineStatus('Disconnected.');
            }
        }

        function handleOnlineMessage(message) {
            if (!message || typeof message.type !== 'string') return;
            if (message.type === 'character' && onlineRole === 'host' && CHARACTERS[message.id]) {
                pTypes[1] = 0;
                onlinePendingRemoteCharacter = { id: message.id, skin: Number(message.skin) || 0 };
                if (pSelections[0]) applyPendingRemoteCharacter();
                return;
            }
            if (message.type === 'skin' && onlineRole === 'host' && pSelections[1] === message.id) {
                pSkins[1] = Math.max(0, Math.min(CHARACTERS[message.id].skins.length - 1, Number(message.skin) || 0));
                renderChosenSkin(1);
                return;
            }
            if (message.type === 'input') { receiveOnlineInput(message); return; }
            if (message.type === 'match-start' && onlineRole === 'guest') {
                if (message.stage) STAGES[message.stageId] = message.stage;
                currentStageId = message.stageId;
                pSelections = message.selections;
                pSkins = message.skins;
                pTypes = [0, 0, -1, -1];
                document.querySelectorAll('.menu-screen').forEach(el => el.classList.add('hidden'));
                startGame();
                smashBallSpawnCountdown = Number(message.smashCountdown) || 10;
                onlineMatchStarted = true;
                setOnlineStatus('Match started. You are Player 2.');
                closeOnlineModal();
                return;
            }
            if (message.type === 'snapshot' && onlineRole === 'guest') receiveOnlineSnapshot(message);
            if (message.type === 'match-result' && onlineRole === 'guest') endGame(Number(message.winner));
        }

        function applyPendingRemoteCharacter() {
            if (onlineRole !== 'host' || !pSelections[0] || !onlinePendingRemoteCharacter) return;
            const pending = onlinePendingRemoteCharacter;
            onlinePendingRemoteCharacter = null;
            const card = document.querySelector(`.melee-char-card[data-char="${pending.id}"]`);
            if (card && !pSelections[1]) {
                handleCharSelect(pending.id, card);
                pSkins[1] = pending.skin % CHARACTERS[pending.id].skins.length;
                renderChosenSkin(1);
            }
        }

        function renderChosenSkin(playerIndex) {
            const playerNum = playerIndex + 1;
            const char = CHARACTERS[pSelections[playerIndex]];
            if (!char) return;
            const skin = pSkins[playerIndex];
            const skinEl = document.getElementById(`skin-name-p${playerNum}`);
            skinEl.textContent = char.skinNames?.[skin] || `Skin ${skin + 1}`;
            skinEl.classList.remove('hidden');
            const portrait = document.getElementById(`portrait-p${playerNum}`);
            portrait.style.backgroundImage = char.portraits?.[skin] ? `url('${char.portraits[skin]}')` : 'none';
            portrait.style.backgroundColor = `#${char.skins[skin].toString(16).padStart(6, '0')}`;
        }

        function sendOnlineInput() {
            if (gameState !== 'playing' || !onlineChannel || onlineChannel.readyState !== 'open') return;
            const playerIndex = onlineRole === 'host' ? 0 : onlineRole === 'guest' ? 1 : -1;
            if (playerIndex < 0) return;
            const key = keys[`p${playerIndex + 1}`];
            const pad = padKeys[`p${playerIndex + 1}`];
            const padButtons = prevPadState[playerIndex];
            sendOnlineMessage({ type:'input', playerIndex, left:key.left || pad.left, right:key.right || pad.right,
                up:key.up || pad.up, down:key.down || pad.down,
                attack:key.attack || padButtons.attack, special:key.special || padButtons.special,
                finalSmash:key.finalSmash || padButtons.finalSmash });
        }

        function receiveOnlineInput(input) {
            const remoteIndex = onlineRole === 'host' ? 1 : 0;
            if (input.playerIndex !== remoteIndex) return;
            const keyState = keys[`p${remoteIndex + 1}`];
            const player = players.find(p => p.pIndex === remoteIndex && p.stocks > 0);
            const was = onlineRemoteInput;
            const next = { left:!!input.left, right:!!input.right, up:!!input.up, down:!!input.down,
                attack:!!input.attack, special:!!input.special, finalSmash:!!input.finalSmash };
            if (player && gameState === 'playing') {
                if (next.up && !was.up) player.tryJump();
                const aim = { left:next.left, right:next.right, up:next.up, down:next.down };
                if (next.attack && !was.attack) player.attack(getAttackType('neutral', aim));
                if (next.special && !was.special) player.attack(getAttackType('special', aim));
                if (next.finalSmash && !was.finalSmash) requestFinalSmash(remoteIndex);
            }
            Object.assign(keyState, next);
            onlineRemoteInput = next;
        }

        function sendOnlineSnapshot() {
            if (onlineRole !== 'host' || gameState !== 'playing' || !onlineChannel || onlineChannel.readyState !== 'open') return;
            sendOnlineMessage({ type:'snapshot', sequence:++onlineSnapshotSequence, players:players.map(p => ({ index:p.pIndex, pos:[p.pos.x,p.pos.y,p.pos.z], vel:[p.vel.x,p.vel.y,p.vel.z],
                percent:p.percent, stocks:p.stocks, finalSmashCharge:p.finalSmashCharge, facing:p.facing, state:p.state, hitstun:p.hitstun,
                invuln:p.invuln, jumpsLeft:p.jumpsLeft })),
                smashBall:smashBall ? { pos:[smashBall.root.position.x,smashBall.root.position.y,smashBall.root.position.z], health:smashBall.health,
                    originX:smashBall.originX, originY:smashBall.originY, age:smashBall.age, hitCooldown:smashBall.hitCooldown } : null,
                smashCountdown:smashBallSpawnCountdown });
        }

        function receiveOnlineSnapshot(snapshot) {
            if (!Array.isArray(snapshot.players)) return;
            if (Number.isFinite(snapshot.sequence)) {
                if (snapshot.sequence <= onlineLastSnapshotSequence) return;
                onlineLastSnapshotSequence = snapshot.sequence;
            }
            snapshot.players.forEach(state => {
                const player = players.find(p => p.pIndex === state.index);
                if (!player) return;
                const targetPosition = new THREE.Vector3(...state.pos);
                const targetVelocity = new THREE.Vector3(...state.vel);
                const respawned = player.onlineHostStocks !== undefined && state.stocks !== player.onlineHostStocks;
                if (!player.onlineHasSnapshot || respawned || player.pos.distanceTo(targetPosition) > 9) {
                    player.pos.copy(targetPosition);
                    player.vel.copy(targetVelocity);
                    player.onlineTargetPosition = null;
                    player.onlineTargetVelocity = null;
                } else {
                    player.onlineTargetPosition = targetPosition;
                    player.onlineTargetVelocity = targetVelocity;
                }
                player.onlineHasSnapshot = true;
                player.onlineHostStocks = state.stocks;
                player.percent = state.percent; player.stocks = state.stocks; player.finalSmashCharge = state.finalSmashCharge;
                player.facing = state.facing; player.state = state.state; player.hitstun = state.hitstun; player.invuln = state.invuln; player.jumpsLeft = state.jumpsLeft;
                if (state.stocks > 0) document.getElementById(`hud-panel-${state.index}`).classList.remove('opacity-30', 'grayscale');
            });
            smashBallSpawnCountdown = Number(snapshot.smashCountdown) || smashBallSpawnCountdown;
            if (!snapshot.smashBall && smashBall) removeSmashBall();
            if (snapshot.smashBall) {
                if (!smashBall) smashBall = createSmashBall();
                smashBall.root.position.set(...snapshot.smashBall.pos);
                smashBall.health = snapshot.smashBall.health;
                smashBall.originX = snapshot.smashBall.originX; smashBall.originY = snapshot.smashBall.originY;
                smashBall.age = snapshot.smashBall.age; smashBall.hitCooldown = snapshot.smashBall.hitCooldown;
            }
            updateHUD();
        }

        function reconcileOnlinePlayer(player, deltaSeconds) {
            if (onlineRole !== 'guest' || !player.onlineTargetPosition) return;
            const blend = 1 - Math.exp(-18 * Math.min(deltaSeconds, 0.05));
            player.pos.lerp(player.onlineTargetPosition, blend);
            if (player.onlineTargetVelocity) player.vel.lerp(player.onlineTargetVelocity, blend * 0.7);
            player.mesh.position.copy(player.pos);
            if (player.pos.distanceToSquared(player.onlineTargetPosition) < 0.0025) {
                player.pos.copy(player.onlineTargetPosition);
                if (player.onlineTargetVelocity) player.vel.copy(player.onlineTargetVelocity);
                player.mesh.position.copy(player.pos);
                player.onlineTargetPosition = null;
                player.onlineTargetVelocity = null;
            }
        }

        function initUI() {
            const roster = document.getElementById('roster');
            for (const [id, char] of Object.entries(CHARACTERS)) {
                const div = document.createElement('div');
                div.className = 'relative w-[85px] h-[85px] bg-gray-700 border-[3px] border-gray-400 cursor-pointer hover:border-white overflow-hidden melee-char-card group shadow-lg';
                div.dataset.char = id;
                
                const bgStyle = char.icon 
                    ? `background-image: url('${char.icon}'); background-size: cover; background-position: top center;` 
                    : `background-color: #${char.color.toString(16).padStart(6,'0')};`;

                let innerHtmlContent = `
                    <div class="absolute inset-0 flex items-center justify-center transition-opacity" style="${bgStyle}">
                        <div class="w-full h-full bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 w-full bg-black bg-opacity-90 text-center border-t border-gray-500 pb-[1px] pt-[1px] z-20">
                        <span class="text-[10px] font-bold text-white uppercase tracking-tighter" style="font-family: Arial, sans-serif;">${char.name}</span>
                    </div>
                    <div class="absolute top-0 left-0 w-full h-full border-[4px] border-transparent pointer-events-none p1-cursor hidden z-30"></div>
                    <div class="absolute top-0 left-0 w-full h-full border-[4px] border-transparent pointer-events-none p2-cursor hidden z-30"></div>
                    <div class="absolute top-0 left-0 w-full h-full border-[4px] border-transparent pointer-events-none p3-cursor hidden z-30"></div>
                    <div class="absolute top-0 left-0 w-full h-full border-[4px] border-transparent pointer-events-none p4-cursor hidden z-30"></div>
                `;
                
                if (char.isRandom) {
                    innerHtmlContent += `<div class="absolute inset-0 flex items-center justify-center text-5xl font-black text-gray-300 z-10 drop-shadow-md">?</div>`;
                }
                div.innerHTML = innerHtmlContent;
                
                // Sync internal cursors with mouse hovers
                div.onmouseenter = () => {
                    const idx = Object.keys(CHARACTERS).indexOf(id);
                    let selectingP = -1;
                    for(let i=0; i<4; i++) { if (pTypes[i] !== -1 && !pSelections[i]) { selectingP = i; break; } }
                    if (selectingP !== -1) cursors[selectingP] = idx;
                };
                
                div.onclick = () => handleCharSelect(id, div);
                roster.appendChild(div);
            }

            renderStageCards();
        }

        function renderStageCards() {
            const stageContainer = document.getElementById('stages');
            stageContainer.innerHTML = '';
            for (const [id, stage] of Object.entries(STAGES)) {
                const div = document.createElement('div');
                div.className = 'stage-card';
                div.textContent = stage.name;
                const desc = document.createElement('span');
                desc.style.cssText = 'font-size:0.9rem;color:#94a3b8;';
                desc.textContent = stage.desc || (stage.id ? 'Custom stage' : '');
                div.appendChild(document.createElement('br'));
                div.appendChild(desc);
                
                div.onmouseenter = () => { stageCursor = Object.keys(STAGES).indexOf(id); };
                div.onclick = () => selectStage(id);
                stageContainer.appendChild(div);
            }
        }

        function importStageJSON(event) {
            const file = event.target.files && event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
                try {
                    const data = JSON.parse(reader.result);
                    const stage = data.stage || data;
                    if (!stage.name || !Array.isArray(stage.platforms) || !stage.bounds) throw new Error('Map needs a name, bounds, and platforms array.');
                    const id = String(stage.id || file.name.replace(/\.json$/i, '') || 'custom-stage').toLowerCase().replace(/[^a-z0-9_-]+/g, '-');
                    stage.desc = stage.desc || 'Custom stage';
                    stage.bgColor = parseColor(stage.bgColor ?? '#101827');
                    stage.backgroundImageUrl = normalizeStageAssetURL(stage.backgroundImageUrl);
                    stage.skyboxUrl = normalizeStageAssetURL(stage.skyboxUrl);
                    stage.platforms.forEach(p => { p.color = parseColor(p.color ?? '#64748b'); p.modelUrl = normalizeStageAssetURL(p.modelUrl); p.textureUrl = normalizeStageAssetURL(p.textureUrl); });
                    (stage.decorations || []).forEach(o => { if (o.color !== undefined) o.color = parseColor(o.color); if (o.emissive !== undefined) o.emissive = parseColor(o.emissive); o.modelUrl = normalizeStageAssetURL(o.modelUrl); o.textureUrl = normalizeStageAssetURL(o.textureUrl); });
                    (stage.backgroundLayers || []).forEach(layer => { layer.url = normalizeStageAssetURL(layer.url); });
                    STAGES[id] = stage;
                    renderStageCards();
                    document.getElementById('stage-json-input').value = '';
                    alert(`Imported ${stage.name}. Select its stage card to play.`);
                } catch (err) { alert(`Could not import stage: ${err.message}`); }
            };
            reader.readAsText(file);
        }

        function parseColor(value) {
            if (typeof value === 'number') return value;
            if (typeof value === 'string') return Number.parseInt(value.replace(/^#/, '').replace(/^0x/i, ''), 16) || 0x64748b;
            return 0x64748b;
        }

        function normalizeStageAssetURL(value) {
            if (!value) return value;
            try {
                const url = new URL(value);
                if (url.hostname === 'github.com') {
                    url.hostname = 'raw.githubusercontent.com';
                    url.pathname = url.pathname.replace('/blob/', '/').replace('/raw/', '/');
                    url.searchParams.delete('raw');
                }
                return url.href;
            } catch { return value; }
        }

        function goToScreen(screenId) {
            document.querySelectorAll('.menu-screen').forEach(el => el.classList.add('hidden'));
            const targetScreen = document.getElementById(screenId);
            if (targetScreen) targetScreen.classList.remove('hidden');
            
            activeScreen = screenId;
            
            if(screenId === 'title-screen' || screenId === 'character-select') {
                gameState = 'menu';
                scene.background = new THREE.Color(0x0a0a15);
                scene.fog = new THREE.FogExp2(0x0a0a15, 0.01);
            }

            if(screenId === 'title-screen') {
                for(let i=0; i<4; i++) {
                    pSelections[i] = null; pSkins[i] = 0;
                    document.getElementById(`name-p${i+1}`).innerText = '';
                    document.getElementById(`portrait-p${i+1}`).style.backgroundColor = 'transparent';
                    document.getElementById(`portrait-p${i+1}`).style.backgroundImage = 'none';
                    document.getElementById(`portrait-p${i+1}`).style.opacity = '0';
                    document.getElementById(`skin-hint-p${i+1}`).classList.add('hidden');
                    document.getElementById(`skin-name-p${i+1}`).classList.add('hidden');
                    document.getElementById(`name-box-p${i+1}`).classList.add('hidden');
                }
                
                document.querySelectorAll('.melee-char-card').forEach(c => { 
                    c.querySelector('.p1-cursor').classList.replace('border-red-500', 'border-transparent');
                    c.querySelector('.p1-cursor').classList.add('hidden');
                    c.querySelector('.p2-cursor').classList.replace('border-blue-500', 'border-transparent');
                    c.querySelector('.p2-cursor').classList.add('hidden');
                    c.querySelector('.p3-cursor').classList.replace('border-yellow-500', 'border-transparent');
                    c.querySelector('.p3-cursor').classList.add('hidden');
                    c.querySelector('.p4-cursor').classList.replace('border-green-500', 'border-transparent');
                    c.querySelector('.p4-cursor').classList.add('hidden');
                });

                document.getElementById('ready-banner').classList.add('hidden');
            }
        }

        function handleCharSelect(charId, element) {
            let actualCharId = charId;
            if (CHARACTERS[charId].isRandom) {
                const pool = Object.keys(CHARACTERS).filter(k => !CHARACTERS[k].isRandom);
                actualCharId = pool[Math.floor(Math.random() * pool.length)];
            }
            const char = CHARACTERS[actualCharId];

            let selectingP = -1;
            for(let i=0; i<4; i++) {
                if (pTypes[i] !== -1 && !pSelections[i]) { selectingP = i; break; }
            }
            if (selectingP === -1) return; // Everyone is ready

            pSelections[selectingP] = actualCharId;
            pSkins[selectingP] = 0;
            
            // Auto-assign alt skin if someone else has it
            while(true) {
                let collision = false;
                for(let j=0; j<selectingP; j++) {
                    if(pSelections[j] === actualCharId && pSkins[j] === pSkins[selectingP]) collision = true;
                }
                if(collision) {
                    pSkins[selectingP] = (pSkins[selectingP] + 1) % char.skins.length;
                } else break;
            }

            const pCursor = element.querySelector(`.p${selectingP+1}-cursor`);
            const colors = ['border-red-500', 'border-blue-500', 'border-yellow-500', 'border-green-500'];
            pCursor.classList.replace('border-transparent', colors[selectingP]);
            pCursor.classList.remove('hidden');
            
            document.getElementById(`name-box-p${selectingP+1}`).classList.remove('hidden');
            document.getElementById(`name-p${selectingP+1}`).innerText = char.name;
            
            const skinNameEl = document.getElementById(`skin-name-p${selectingP+1}`);
            if (char.skinNames) {
                skinNameEl.innerText = char.skinNames[pSkins[selectingP]];
                skinNameEl.classList.remove('hidden');
            }
            
            const port = document.getElementById(`portrait-p${selectingP+1}`);
            if (char.portraits && char.portraits[pSkins[selectingP]]) {
                port.style.backgroundImage = `url('${char.portraits[pSkins[selectingP]]}')`;
                port.style.backgroundSize = 'contain';
                port.style.backgroundRepeat = 'no-repeat';
                port.style.backgroundPosition = 'bottom center';
                port.style.backgroundColor = '#' + char.skins[pSkins[selectingP]].toString(16).padStart(6,'0');
                port.style.opacity = '1';
            } else {
                port.style.backgroundImage = 'none';
                port.style.backgroundColor = '#' + char.skins[pSkins[selectingP]].toString(16).padStart(6,'0');
                port.style.opacity = '0.7';
            }
            document.getElementById(`skin-hint-p${selectingP+1}`).classList.remove('hidden');

            checkReadyState();
            if (onlineRole === 'guest' && selectingP === 1) {
                sendOnlineMessage({ type:'character', id:actualCharId, skin:pSkins[1] });
            }
            if (onlineRole === 'host' && selectingP === 0) applyPendingRemoteCharacter();
        }

        function cycleSkin(playerNum) {
            const pIndex = playerNum - 1;
            if (pSelections[pIndex]) {
                const charId = pSelections[pIndex];
                const char = CHARACTERS[charId];
                
                pSkins[pIndex] = (pSkins[pIndex] + 1) % char.skins.length;
                
                // Skip skin if another active player has it
                let duplicate = true;
                let attempts = 0;
                while(duplicate && attempts < char.skins.length) {
                    duplicate = false;
                    for(let i=0; i<4; i++) {
                        if (i !== pIndex && pSelections[i] === charId && pSkins[i] === pSkins[pIndex]) {
                            duplicate = true;
                        }
                    }
                    if(duplicate) {
                        pSkins[pIndex] = (pSkins[pIndex] + 1) % char.skins.length;
                    }
                    attempts++;
                }
                
                const skinNameEl = document.getElementById(`skin-name-p${playerNum}`);
                if (char.skinNames) {
                    skinNameEl.innerText = char.skinNames[pSkins[pIndex]];
                    skinNameEl.classList.remove('hidden');
                }
                
                const port = document.getElementById(`portrait-p${playerNum}`);
                if (char.portraits && char.portraits[pSkins[pIndex]]) {
                    port.style.backgroundImage = `url('${char.portraits[pSkins[pIndex]]}')`;
                    port.style.backgroundColor = '#' + char.skins[pSkins[pIndex]].toString(16).padStart(6,'0');
                } else {
                    port.style.backgroundImage = 'none';
                    port.style.backgroundColor = '#' + char.skins[pSkins[pIndex]].toString(16).padStart(6,'0');
                }
                if (onlineRole === 'guest' && pIndex === 1) sendOnlineMessage({ type:'skin', id:charId, skin:pSkins[pIndex] });
            }
        }

        function selectStage(stageId) {
            currentStageId = stageId;
            document.querySelectorAll('.menu-screen').forEach(el => el.classList.add('hidden')); 
            startGame();
        }

        function updateHUD() {
            if (gameState !== 'playing') return;
            
            players.forEach(player => {
                if (player.stocks <= 0) {
                    document.getElementById(`hud-panel-${player.pIndex}`).classList.add('opacity-30', 'grayscale');
                }
                const pctEl = document.getElementById(`hud-pct-p${player.pIndex + 1}`);
                pctEl.innerText = Math.floor(player.percent) + '%';
                
                pctEl.className = 'percent';
                if (player.percent < 50) pctEl.classList.add('pct-low');
                else if (player.percent < 100) pctEl.classList.add('pct-med');
                else if (player.percent < 150) pctEl.classList.add('pct-high');
                else pctEl.classList.add('pct-dead');

                const meterEl = document.getElementById(`hud-final-meter-${player.pIndex}`);
                const fillEl = document.getElementById(`hud-final-fill-${player.pIndex}`);
                const labelEl = document.getElementById(`hud-final-label-${player.pIndex}`);
                const charge = Math.max(0, Math.min(100, player.finalSmashCharge || 0));
                fillEl.style.width = `${charge}%`;
                meterEl.classList.toggle('ready', charge >= 100);
                const controls = ['H', ';', 'Numpad 3', 'Num . / RT'];
                labelEl.innerText = charge >= 100 ? `READY • ${controls[player.pIndex]}` : (smashBall ? `BREAK THE BALL • ${controls[player.pIndex]}` : `WAIT FOR BALL • ${controls[player.pIndex]}`);

                const stocksEl = document.getElementById(`hud-stocks-p${player.pIndex + 1}`);
                stocksEl.innerHTML = '';
                for(let i=0; i<player.stocks; i++) {
                    const stock = document.createElement('div');
                    stock.className = `stock-icon p${player.pIndex + 1}-stock`;
                    stocksEl.appendChild(stock);
                }
            });
        }

        function checkWinCondition() {
            let alive = players.filter(p => p.stocks > 0);
            if (alive.length <= 1) {
                if (alive.length === 1) endGame(alive[0].pIndex);
                else endGame(-1);
            }
        }

        function endGame(winnerIndex) {
            if (onlineRole === 'host') sendOnlineMessage({ type:'match-result', winner:winnerIndex });
            gameState = 'result';
            removeSmashBall();
            document.getElementById('smash-ball-notice').classList.add('hidden');
            document.getElementById('cinematic-overlay').classList.remove('active', 'time-stop');
            document.getElementById('hud').classList.add('hidden');
            goToScreen('result-screen');
            const winnerText = document.getElementById('winner-text');
            const winnerSub = document.getElementById('winner-subtext');
            const winnerBox = document.getElementById('winner-box');
            
            if (winnerIndex === -1) {
                winnerText.innerText = "DRAW!";
                winnerText.style.color = "white";
                winnerSub.innerText = "Nobody wins.";
                winnerBox.style.borderColor = "gray";
            } else {
                winnerText.innerText = "GAME!";
                const colors = ["#ef4444", "#3b82f6", "#eab308", "#22c55e"];
                winnerText.style.color = colors[winnerIndex];
                const charName = CHARACTERS[pSelections[winnerIndex]].name;
                winnerSub.innerText = `Player ${winnerIndex + 1} (${charName}) Wins!`;
                winnerSub.style.color = colors[winnerIndex];
                winnerBox.style.borderColor = colors[winnerIndex];
            }
        }

        function resetGame() {
            players.forEach(p => { 
                scene.remove(p.mesh); 
                if(p.standMesh) scene.remove(p.standMesh); // Also clean up attached stands!
            });
            stageMeshes.forEach(m => scene.remove(m));
            decorationMeshes.forEach(m => scene.remove(m));
            if (stageSkyboxMesh) { scene.remove(stageSkyboxMesh); stageSkyboxMesh.geometry.dispose(); stageSkyboxMesh.material.dispose(); stageSkyboxMesh = null; }
            stageSkyboxSpinSpeed = 0;
            projectiles.forEach(p => scene.remove(p.mesh));
            hitboxes.forEach(h => scene.remove(h.mesh));
            
            players = [];
            stageMeshes = [];
            decorationMeshes = [];
            projectiles = [];
            hitboxes = [];
            
            goToScreen('title-screen');
        }

        // ==========================================
        // THREE.JS & GAME ENGINE SETUP
        // ==========================================
        function initThree() {
            const canvas = document.getElementById('gameCanvas');
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x0a0a15);
            scene.fog = new THREE.FogExp2(0x0a0a15, 0.01);

            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 10, 50);

            renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, powerPreference: "high-performance" });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;

            stageAmbientLight = new THREE.AmbientLight(0xffffff, 0.4);
            scene.add(stageAmbientLight);

            stageDirectionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            stageDirectionalLight.position.set(20, 40, 20);
            stageDirectionalLight.castShadow = true;
            stageDirectionalLight.shadow.camera.left = -40;
            stageDirectionalLight.shadow.camera.right = 40;
            stageDirectionalLight.shadow.camera.top = 40;
            stageDirectionalLight.shadow.camera.bottom = -40;
            stageDirectionalLight.shadow.mapSize.width = 1024;
            stageDirectionalLight.shadow.mapSize.height = 1024;
            scene.add(stageDirectionalLight);

            createBackground();
            window.addEventListener('resize', onWindowResize);
            setupInputs();
        }

        function createBackground() {
            const geo = new THREE.BufferGeometry();
            const vertices = [];
            for (let i = 0; i < 800; i++) {
                vertices.push((Math.random() - 0.5) * 400, (Math.random() - 0.5) * 400, (Math.random() - 0.5) * 200 - 100);
            }
            geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            const mat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.6, transparent: true, opacity: 0.6 });
            bgStars = new THREE.Points(geo, mat);
            scene.add(bgStars);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        // ==========================================
        // INPUT HANDLING
        // ==========================================
        
        function getAttackType(base, keys) {
            if (keys.up) return 'up_' + base;
            if (keys.down) return 'down_' + base;
            if (keys.left || keys.right) return 'forward_' + base;
            return base;
        }

        function createFinalSmashBurst(x, y, color, style = 'impact') {
            const burst = new THREE.Group();
            burst.position.set(x, y, 2);
            const material = (tone, opacity = 0.9) => new THREE.MeshBasicMaterial({ color: tone, transparent: true, opacity, depthWrite: false, side: THREE.DoubleSide });
            const core = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 12), material(color));
            const ring = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.14, 6, 36), material(0xffffff, 0.85));
            ring.rotation.x = Math.PI / 2;
            burst.add(core, ring);
            if (style === 'pea-cannon') {
                core.scale.set(1.65, 0.9, 1.35);
                const leaf1 = new THREE.Mesh(new THREE.ConeGeometry(0.65, 1.6, 4), material(0x22c55e)); leaf1.position.set(-1.3, 0.2, 0); leaf1.rotation.z = Math.PI / 2;
                const leaf2 = leaf1.clone(); leaf2.position.y = -0.6; leaf2.rotation.z = -Math.PI / 2;
                burst.add(leaf1, leaf2);
            } else if (style === 'chainsaw') {
                core.scale.set(2.6, 0.18, 0.25); core.rotation.z = 0.42;
                const slash = new THREE.Mesh(new THREE.BoxGeometry(5.4, 0.16, 0.2), material(0xfff7ed)); slash.rotation.z = -0.42; burst.add(slash);
            } else if (style === 'time-stop') {
                core.geometry.dispose(); core.geometry = new THREE.CircleGeometry(2.5, 40); core.material = material(0x170d2d, 0.68);
                for (let i = 0; i < 12; i++) {
                    const angle = i * Math.PI / 6;
                    const tick = new THREE.Mesh(new THREE.BoxGeometry(0.12, i % 3 === 0 ? 0.72 : 0.42, 0.12), material(0xfef3c7));
                    tick.position.set(Math.sin(angle) * 2, Math.cos(angle) * 2, 0.2); tick.rotation.z = -angle; burst.add(tick);
                }
                const hand = new THREE.Mesh(new THREE.BoxGeometry(0.12, 1.8, 0.12), material(0xffffff)); hand.position.set(0, 0.85, 0.25); burst.add(hand);
            } else if (style === 'elemental') {
                core.geometry.dispose(); core.geometry = new THREE.TetrahedronGeometry(1.45);
                [0xef4444, 0x38bdf8, 0x22c55e, 0xfacc15].forEach((tone, i) => {
                    const shard = new THREE.Mesh(new THREE.OctahedronGeometry(0.78), material(tone));
                    const angle = i * Math.PI / 2; shard.position.set(Math.cos(angle) * 2.2, Math.sin(angle) * 2.2, 0.3); burst.add(shard);
                });
            } else if (style === 'meteor') {
                core.geometry.dispose(); core.geometry = new THREE.IcosahedronGeometry(1.7, 1); core.rotation.set(0.4, 0.7, 0.2);
                const shockwave = new THREE.Mesh(new THREE.TorusGeometry(3.2, 0.35, 6, 36), material(0xff8c32)); shockwave.rotation.x = Math.PI / 2; shockwave.position.y = -1.5; burst.add(shockwave);
                for (let i = 0; i < 5; i++) {
                    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(0.35 + (i % 2) * 0.2), material(i % 2 ? 0xfde68a : 0xf97316));
                    rock.position.set(Math.cos(i * 1.25) * 2.7, Math.sin(i * 1.25) * 2.4, 0.2); burst.add(rock);
                }
            } else if (style === 'devil-contract') {
                core.geometry.dispose(); core.geometry = new THREE.RingGeometry(0.75, 1.35, 8); core.material = material(0xdc2626, 0.9);
                const sigil = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.12, 6, 6), material(0xfef2f2)); sigil.rotation.z = Math.PI / 4; burst.add(sigil);
                const flame = new THREE.Mesh(new THREE.ConeGeometry(0.8, 2.2, 5), material(0x7f1d1d)); flame.position.y = 2.2; burst.add(flame);
            } else {
                const glint = new THREE.Mesh(new THREE.OctahedronGeometry(1.4), material(0xfff7cc)); burst.add(glint);
            }
            const materials = [];
            burst.traverse(node => { if (node.material) materials.push(node.material); });
            burst.userData.materials = materials;
            burst.userData.ring = ring;
            burst.userData.style = style;
            scene.add(burst);
            return burst;
        }

        function requestFinalSmash(pIndex) {
            if (gameState !== 'playing' || finalSmashSequence) return false;
            const player = players.find(p => p.pIndex === pIndex && p.stocks > 0);
            if (!player || player.finalSmashCharge < 100 || player.hitstun > 0 || player.state === 'attack') return false;

            const config = FINAL_SMASHES[player.id] || { name: 'Final Smash!', color: 0xffffff, range: 22, height: 12, radial: true, hitTimes: [1], damage: 32, knockback: 4.5 };
            const opponents = players.filter(p => p.pIndex !== pIndex && p.stocks > 0);
            const nearest = opponents.sort((a, b) => Math.abs(a.pos.x - player.pos.x) - Math.abs(b.pos.x - player.pos.x))[0];
            if (nearest) player.facing = nearest.pos.x < player.pos.x ? -1 : 1;

            player.finalSmashCharge = 0;
            player.finalSmashActive = true;
            player.finalSmashConfig = config;
            player.state = 'finalSmash';
            player.currentMove = null;
            player.vel.set(0, 0, 0);
            player.baseRotationY = 0;
            finalSmashSequence = {
                attacker: player,
                config,
                elapsed: 0,
                nextHit: 0,
                duration: config.duration || 4,
                origin: player.pos.clone(),
                chargeEffect: createFinalSmashBurst(player.pos.x, player.pos.y + 1, config.color, config.style),
                effects: [],
                originalFov: camera.fov
            };

            const overlay = document.getElementById('cinematic-overlay');
            const caption = document.getElementById('cinematic-caption');
            caption.innerText = config.name;
            caption.style.color = `#${config.color.toString(16).padStart(6, '0')}`;
            document.getElementById('cinematic-subtitle').innerText = config.subtitle || '';
            overlay.classList.toggle('time-stop', config.style === 'time-stop');
            overlay.classList.remove('active');
            void overlay.offsetWidth;
            overlay.classList.add('active');
            return true;
        }

        function updateFinalSmash(deltaSeconds) {
            const sequence = finalSmashSequence;
            if (!sequence) return;
            sequence.elapsed += deltaSeconds;
            const { attacker, config } = sequence;
            const t = sequence.elapsed;
            if (sequence.chargeEffect) {
                sequence.chargeEffect.position.set(attacker.pos.x, attacker.pos.y + 1, 1.5);
                const chargeTime = Math.max(0.5, config.hitTimes[0]);
                const chargeProgress = THREE.MathUtils.clamp(t / chargeTime, 0, 1);
                const chargeScale = 0.35 + chargeProgress * 0.8 + Math.sin(t * 8) * 0.08;
                sequence.chargeEffect.scale.setScalar(chargeScale);
                sequence.chargeEffect.rotation.z += deltaSeconds * (config.style === 'time-stop' ? 0.35 : 1.6);
                sequence.chargeEffect.userData.materials.forEach(material => material.opacity = t > chargeTime ? 0 : 0.32 + chargeProgress * 0.4);
            }
            if (config.style === 'chainsaw') {
                const dash = THREE.MathUtils.clamp((t - 0.58) / 1.45, 0, 1);
                attacker.pos.x = sequence.origin.x + attacker.facing * 10 * dash;
            } else if (config.style === 'meteor') {
                const dive = THREE.MathUtils.clamp((t - 0.68) / 1.72, 0, 1);
                attacker.pos.x = sequence.origin.x + attacker.facing * 7 * dive;
                attacker.pos.y = sequence.origin.y + Math.sin(dive * Math.PI) * 9 - dive * 2;
            }
            if (attacker.stocks > 0) attacker.update({ left: false, right: false, up: false, down: false });

            while (sequence.nextHit < config.hitTimes.length && sequence.elapsed >= config.hitTimes[sequence.nextHit]) {
                const hitIndex = sequence.nextHit++;
                let hitX = attacker.pos.x + attacker.facing * Math.min(config.range * 0.55, 14);
                let hitY = attacker.pos.y + (hitIndex % 2 ? 1 : 0);
                const candidates = players.filter(target => {
                    if (target === attacker || target.stocks <= 0) return false;
                    const dx = target.pos.x - attacker.pos.x;
                    return Math.abs(dx) <= config.range && Math.abs(target.pos.y - attacker.pos.y) <= config.height && (config.radial || dx * attacker.facing >= -2);
                });
                if (candidates.length) {
                    hitX = candidates.reduce((sum, target) => sum + target.pos.x, attacker.pos.x) / (candidates.length + 1);
                    hitY = candidates.reduce((sum, target) => sum + target.pos.y, attacker.pos.y) / (candidates.length + 1);
                    if (onlineRole !== 'guest') candidates.forEach(target => {
                        const direction = target.pos.x >= attacker.pos.x ? 1 : -1;
                        target.takeDamage(config.damage, config.knockback, 0.9, 0.32, direction);
                    });
                }
                if (config.style === 'elemental') {
                    const elementOffsets = [[-2.8, 0], [2.8, 1], [-1.4, 2.2]];
                    const offset = elementOffsets[hitIndex % elementOffsets.length];
                    hitX += offset[0]; hitY += offset[1];
                }
                sequence.effects.push({ mesh: createFinalSmashBurst(hitX, hitY, config.color, config.style), born: sequence.elapsed });
                if (config.style === 'time-stop') {
                    document.getElementById('cinematic-subtitle').innerText = 'TIME RESUMES.';
                    document.getElementById('cinematic-overlay').classList.remove('time-stop');
                }
            }

            sequence.effects = sequence.effects.filter(effect => {
                const age = sequence.elapsed - effect.born;
                if (age > 0.78) {
                    scene.remove(effect.mesh);
                    effect.mesh.traverse(node => {
                        if (node.material) node.material.dispose();
                        if (node.geometry) node.geometry.dispose();
                    });
                    return false;
                }
                const scale = 0.45 + age * (effect.mesh.userData.style === 'pea-cannon' ? 3.2 : 4.5);
                effect.mesh.scale.set(scale, scale, scale);
                effect.mesh.rotation.y += deltaSeconds * 2.8;
                effect.mesh.userData.ring.rotation.z += deltaSeconds * (effect.mesh.userData.style === 'time-stop' ? 1.1 : 4.5);
                effect.mesh.userData.materials.forEach(material => material.opacity = Math.max(0, 0.92 * (1 - age / 0.78)));
                return true;
            });

            const targets = [attacker, ...players.filter(p => p !== attacker && p.stocks > 0 && Math.abs(p.pos.x - attacker.pos.x) < config.range && Math.abs(p.pos.y - attacker.pos.y) < config.height)];
            const centerX = targets.reduce((sum, p) => sum + p.pos.x, 0) / targets.length;
            const centerY = targets.reduce((sum, p) => sum + p.pos.y, 0) / targets.length;
            const shotTime = config.style === 'time-stop' ? 3.12 : config.hitTimes[0];
            const lastHitTime = config.style === 'time-stop' ? 3.12 : config.hitTimes[config.hitTimes.length - 1];
            let cameraX = attacker.pos.x - attacker.facing * 4.5;
            let cameraY = attacker.pos.y + 2.5;
            let cameraZ = 23;
            let orbit = 0;
            if (t < 0.55) {
                cameraZ = 20;
                cameraY += Math.sin(t * 7) * 0.25;
            } else if (t < 1.25) {
                orbit = (t - 0.55) * 2.4;
                cameraX = centerX + Math.sin(orbit) * 7;
                cameraZ = 24 + Math.cos(orbit) * 4;
                cameraY = centerY + 3 + Math.sin(orbit * 1.5) * 1.5;
            } else if (config.style === 'time-stop' && t < shotTime) {
                orbit = (t - 1.25) * 0.85;
                cameraX = centerX + Math.sin(orbit) * 9;
                cameraZ = 24 + Math.cos(orbit) * 5;
                cameraY = centerY + 4 + Math.sin(orbit * 1.7) * 2;
            } else if (config.style === 'meteor' && t < shotTime) {
                cameraX = centerX + Math.sin(t * 2) * 5;
                cameraY = centerY + 8 + Math.cos(t * 3) * 2;
                cameraZ = 30;
            } else if (config.style === 'chainsaw' && t < lastHitTime + 0.35) {
                cameraX = attacker.pos.x - attacker.facing * 5;
                cameraY = attacker.pos.y + 2.2;
                cameraZ = 22 + Math.sin(t * 12) * 1.2;
            } else if (config.style === 'pea-cannon' && t < lastHitTime + 0.35) {
                cameraX = centerX - attacker.facing * 5;
                cameraY = centerY + 1.4;
                cameraZ = 19;
            } else if (config.style === 'elemental' && t < lastHitTime + 0.35) {
                orbit = t * 1.7;
                cameraX = centerX + Math.sin(orbit) * 8;
                cameraY = centerY + 8;
                cameraZ = 28 + Math.cos(orbit) * 4;
            } else if (config.style === 'devil-contract' && t < lastHitTime + 0.35) {
                cameraX = centerX + attacker.facing * 8;
                cameraY = centerY + Math.sin(t * 6) * 1.8;
                cameraZ = 23;
            } else if (t > lastHitTime + 0.35) {
                cameraX = centerX;
                cameraY = centerY + 2.4;
                cameraZ = 34 + Math.min(8, (t - lastHitTime) * 5);
            } else {
                cameraX = centerX - attacker.facing * 2;
                cameraY = centerY + 3.5;
                cameraZ = 19;
            }
            const inImpact = config.hitTimes.some(hitTime => Math.abs(t - hitTime) < 0.16);
            const shake = inImpact ? Math.sin(t * 110) * 0.35 : 0;
            camera.position.x += (cameraX + shake - camera.position.x) * Math.min(1, deltaSeconds * 8);
            camera.position.y += (cameraY - camera.position.y) * Math.min(1, deltaSeconds * 7);
            camera.position.z += (cameraZ - camera.position.z) * Math.min(1, deltaSeconds * 6);
            const targetFov = t < 0.55 ? 37 : (t > lastHitTime + 0.35 ? 46 : 33);
            camera.fov += (targetFov - camera.fov) * Math.min(1, deltaSeconds * 6);
            camera.updateProjectionMatrix();
            camera.lookAt(centerX, centerY + 0.7, 0);
            if (stageSkyboxMesh) stageSkyboxMesh.position.copy(camera.position);

            if (sequence.elapsed >= sequence.duration) {
                if (sequence.chargeEffect) {
                    scene.remove(sequence.chargeEffect);
                    sequence.chargeEffect.traverse(node => { if (node.material) node.material.dispose(); if (node.geometry) node.geometry.dispose(); });
                }
                sequence.effects.forEach(effect => {
                    scene.remove(effect.mesh);
                    effect.mesh.traverse(node => { if (node.material) node.material.dispose(); if (node.geometry) node.geometry.dispose(); });
                });
                attacker.finalSmashActive = false;
                attacker.finalSmashConfig = null;
                attacker.state = attacker.grounded ? 'idle' : 'fall';
                attacker.currentMove = null;
                attacker.vel.set(0, 0, 0);
                camera.fov = sequence.originalFov;
                camera.updateProjectionMatrix();
                document.getElementById('cinematic-overlay').classList.remove('active', 'time-stop');
                finalSmashSequence = null;
            }
        }

        function setupInputs() {
            window.addEventListener('keydown', (e) => {
                // Keyboard Menu Controls
                if (gameState === 'menu' || gameState === 'result') {
                    if (e.code === 'KeyA') moveMenuCursor(0, 'left');
                    if (e.code === 'KeyD') moveMenuCursor(0, 'right');
                    if (e.code === 'KeyF') selectMenuAction(0);
                    if (e.code === 'KeyG') cycleSkin(1);
                    
                    if (e.code === 'ArrowLeft') moveMenuCursor(1, 'left');
                    if (e.code === 'ArrowRight') moveMenuCursor(1, 'right');
                    if (e.code === 'KeyK') selectMenuAction(1);
                    if (e.code === 'KeyL') cycleSkin(2);
                    return; 
                }

                if(gameState !== 'playing' || finalSmashSequence) return;

                const remoteKey = onlineRole === 'host'
                    ? ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyK','KeyL','Semicolon'].includes(e.code)
                    : onlineRole === 'guest' && ['KeyA','KeyD','KeyW','KeyS','KeyF','KeyG','KeyH'].includes(e.code);
                if (remoteKey) return;
                
                const p1 = players.find(p => p.pIndex === 0 && p.stocks > 0);
                const p2 = players.find(p => p.pIndex === 1 && p.stocks > 0);
                const p3 = players.find(p => p.pIndex === 2 && p.stocks > 0);
                const p4 = players.find(p => p.pIndex === 3 && p.stocks > 0);

                switch(e.code) {
                    case 'KeyA': keys.p1.left = true; break;
                    case 'KeyD': keys.p1.right = true; break;
                    case 'KeyW': keys.p1.up = true; if(p1) p1.tryJump(); break;
                    case 'KeyS': keys.p1.down = true; break;
                    case 'KeyF': if(!keys.p1.attack && p1) p1.attack(getAttackType('neutral', keys.p1)); keys.p1.attack = true; break;
                    case 'KeyG': if(!keys.p1.special && p1) p1.attack(getAttackType('special', keys.p1)); keys.p1.special = true; break;
                    case 'KeyH': if(!keys.p1.finalSmash) requestFinalSmash(0); keys.p1.finalSmash = true; break;
                    
                    case 'ArrowLeft': keys.p2.left = true; break;
                    case 'ArrowRight': keys.p2.right = true; break;
                    case 'ArrowUp': keys.p2.up = true; if(p2) p2.tryJump(); break;
                    case 'ArrowDown': keys.p2.down = true; break;
                    case 'KeyK': if(!keys.p2.attack && p2) p2.attack(getAttackType('neutral', keys.p2)); keys.p2.attack = true; break;
                    case 'KeyL': if(!keys.p2.special && p2) p2.attack(getAttackType('special', keys.p2)); keys.p2.special = true; break;
                    case 'Semicolon': if(!keys.p2.finalSmash) requestFinalSmash(1); keys.p2.finalSmash = true; break;

                    // Fallback Keyboard controls for Player 3 (Numpad)
                    case 'Numpad4': keys.p3.left = true; break;
                    case 'Numpad6': keys.p3.right = true; break;
                    case 'Numpad8': keys.p3.up = true; if(p3) p3.tryJump(); break;
                    case 'Numpad5': keys.p3.down = true; break;
                    case 'Numpad1': if(!keys.p3.attack && p3) p3.attack(getAttackType('neutral', keys.p3)); keys.p3.attack = true; break;
                    case 'Numpad2': if(!keys.p3.special && p3) p3.attack(getAttackType('special', keys.p3)); keys.p3.special = true; break;
                    case 'Numpad3': if(!keys.p3.finalSmash) requestFinalSmash(2); keys.p3.finalSmash = true; break;
                    case 'NumpadDecimal': if(!keys.p4.finalSmash && p4) requestFinalSmash(3); keys.p4.finalSmash = true; break;
                }
                sendOnlineInput();
            });

            window.addEventListener('keyup', (e) => {
                const remoteKey = onlineRole === 'host'
                    ? ['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyK','KeyL','Semicolon'].includes(e.code)
                    : onlineRole === 'guest' && ['KeyA','KeyD','KeyW','KeyS','KeyF','KeyG','KeyH'].includes(e.code);
                if (remoteKey) return;
                switch(e.code) {
                    case 'KeyA': keys.p1.left = false; break;
                    case 'KeyD': keys.p1.right = false; break;
                    case 'KeyW': keys.p1.up = false; break;
                    case 'KeyS': keys.p1.down = false; break;
                    case 'KeyF': keys.p1.attack = false; break;
                    case 'KeyG': keys.p1.special = false; break;
                    case 'KeyH': keys.p1.finalSmash = false; break;
                    
                    case 'ArrowLeft': keys.p2.left = false; break;
                    case 'ArrowRight': keys.p2.right = false; break;
                    case 'ArrowUp': keys.p2.up = false; break;
                    case 'ArrowDown': keys.p2.down = false; break;
                    case 'KeyK': keys.p2.attack = false; break;
                    case 'KeyL': keys.p2.special = false; break;
                    case 'Semicolon': keys.p2.finalSmash = false; break;

                    case 'Numpad4': keys.p3.left = false; break;
                    case 'Numpad6': keys.p3.right = false; break;
                    case 'Numpad8': keys.p3.up = false; break;
                    case 'Numpad5': keys.p3.down = false; break;
                    case 'Numpad1': keys.p3.attack = false; break;
                    case 'Numpad2': keys.p3.special = false; break;
                    case 'Numpad3': keys.p3.finalSmash = false; break;
                    case 'NumpadDecimal': keys.p4.finalSmash = false; break;
                }
                sendOnlineInput();
            });
        }

        function updateMenuVisuals() {
            if (activeScreen === 'character-select') {
                const cards = document.querySelectorAll('.melee-char-card');
                cards.forEach((c, idx) => {
                    c.classList.remove('p1-hover-fx', 'p2-hover-fx', 'p3-hover-fx', 'p4-hover-fx');
                    if (pTypes[0] !== -1 && idx === cursors[0] && !pSelections[0]) c.classList.add('p1-hover-fx');
                    if (pTypes[1] !== -1 && idx === cursors[1] && !pSelections[1]) c.classList.add('p2-hover-fx');
                    if (pTypes[2] !== -1 && idx === cursors[2] && !pSelections[2]) c.classList.add('p3-hover-fx');
                    if (pTypes[3] !== -1 && idx === cursors[3] && !pSelections[3]) c.classList.add('p4-hover-fx');
                });
            } else if (activeScreen === 'stage-select') {
                const cards = document.querySelectorAll('.stage-card');
                cards.forEach((c, idx) => {
                    c.classList.remove('stage-hover-fx');
                    if (idx === stageCursor) c.classList.add('stage-hover-fx');
                });
            }
        }

        // Centralized Menu Navigation for both Keyboard and Gamepads
        function moveMenuCursor(pIndex, direction) {
            const charKeys = Object.keys(CHARACTERS);
            const stageKeys = Object.keys(STAGES);
            
            if (activeScreen === 'character-select') {
                let current = cursors[pIndex];
                let max = charKeys.length;
                if (direction === 'left') current = (current - 1 + max) % max;
                if (direction === 'right') current = (current + 1) % max;
                
                if (pTypes[pIndex] !== -1 && !pSelections[pIndex]) cursors[pIndex] = current;
            } else if (activeScreen === 'stage-select' && pIndex === 0) {
                let max = stageKeys.length;
                if (direction === 'left') stageCursor = (stageCursor - 1 + max) % max;
                if (direction === 'right') stageCursor = (stageCursor + 1) % max;
            }
        }

        function selectMenuAction(pIndex) {
            if (activeScreen === 'title-screen') {
                if (pIndex === 0) goToScreen('character-select');
            } else if (activeScreen === 'character-select') {
                let allReady = true;
                let activeCount = 0;
                for(let i=0; i<4; i++) {
                    if(pTypes[i] !== -1) { activeCount++; if(!pSelections[i]) allReady = false; }
                }

                if (allReady && activeCount >= 2 && pIndex === 0) {
                    goToScreen('stage-select');
                } else {
                    const cards = document.querySelectorAll('.melee-char-card');
                    if (pTypes[pIndex] !== -1 && !pSelections[pIndex]) handleCharSelect(Object.keys(CHARACTERS)[cursors[pIndex]], cards[cursors[pIndex]]);
                }
            } else if (activeScreen === 'stage-select' && pIndex === 0) {
                selectStage(Object.keys(STAGES)[stageCursor]);
            } else if (activeScreen === 'result-screen' && pIndex === 0) {
                resetGame();
            }
        }

        function handleMenuGamepad(gp, pIndex) {
            const threshold = 0.5;
            const gpAttack = (gp.buttons[0] && gp.buttons[0].pressed) || (gp.buttons[9] && gp.buttons[9].pressed); // A or Start
            const gpSpecial = (gp.buttons[1] && gp.buttons[1].pressed) || (gp.buttons[2] && gp.buttons[2].pressed) || (gp.buttons[3] && gp.buttons[3].pressed); // B, X, Y
            
            const left = gp.axes[0] < -threshold || (gp.buttons[14] && gp.buttons[14].pressed);
            const right = gp.axes[0] > threshold || (gp.buttons[15] && gp.buttons[15].pressed);
            
            if (menuDelay[pIndex] > 0) menuDelay[pIndex]--;

            if (menuDelay[pIndex] <= 0) {
                let moved = false;
                if (left) { moveMenuCursor(pIndex, 'left'); moved = true; }
                if (right) { moveMenuCursor(pIndex, 'right'); moved = true; }
                if (moved) menuDelay[pIndex] = 12; // Cooldown for UI movement
            }

            if (gpAttack && !prevPadState[pIndex].attack) selectMenuAction(pIndex);
            if (gpSpecial && !prevPadState[pIndex].special) cycleSkin(pIndex + 1);

            prevPadState[pIndex].attack = gpAttack;
            prevPadState[pIndex].special = gpSpecial;
            prevPadState[pIndex].jump = false;
        }

        function updateGamepads() {
            if (finalSmashSequence) return;
            const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
            if (!gamepads) return;

            // Collect all active/connected controllers
            let activePads = [];
            for(let i = 0; i < gamepads.length; i++) {
                if(gamepads[i]) activePads.push(gamepads[i]);
            }

            if (gameState === 'playing') {
                if (onlineRole !== 'offline') {
                    const pIndex = onlineRole === 'host' ? 0 : 1;
                    const player = players.find(p => p.pIndex === pIndex && p.stocks > 0);
                    if (activePads[0] && player && pTypes[pIndex] === 0) handleGamepad(activePads[0], padKeys[`p${pIndex + 1}`], player, keys[`p${pIndex + 1}`], pIndex);
                } else {
                    for (let pIndex = 0; pIndex < Math.min(activePads.length, 4); pIndex++) {
                        const player = players.find(p => p.pIndex === pIndex && p.stocks > 0);
                        if (activePads[pIndex] && player && pTypes[pIndex] === 0) handleGamepad(activePads[pIndex], padKeys[`p${pIndex + 1}`], player, keys[`p${pIndex + 1}`], pIndex);
                    }
                }
            } else {
                // Poll UI menus if not in a game
                if (onlineRole !== 'offline') {
                    if (activePads[0]) handleMenuGamepad(activePads[0], onlineRole === 'host' ? 0 : 1);
                } else {
                    if (activePads[0]) handleMenuGamepad(activePads[0], 0);
                    if (activePads[1]) handleMenuGamepad(activePads[1], 1);
                }
            }
        }

        function handleGamepad(gp, padState, player, keyState, pIndex) {
            const threshold = 0.4;
            
            // Left Stick and D-Pad movement
            padState.left = gp.axes[0] < -threshold || (gp.buttons[14] && gp.buttons[14].pressed);
            padState.right = gp.axes[0] > threshold || (gp.buttons[15] && gp.buttons[15].pressed);
            padState.up = gp.axes[1] < -threshold || (gp.buttons[12] && gp.buttons[12].pressed);
            padState.down = gp.axes[1] > threshold || (gp.buttons[13] && gp.buttons[13].pressed);

            // Button mapping simulates standard Smash Bros layout (Switch Pro / Joy-Cons)
            // Bottom button = Attack, Right/Left button = Special, Top button = Jump
            const gpAttack = (gp.buttons[0] && gp.buttons[0].pressed); 
            const gpSpecial = (gp.buttons[1] && gp.buttons[1].pressed) || (gp.buttons[2] && gp.buttons[2].pressed); 
            const gpFinalSmash = (gp.buttons[5] && gp.buttons[5].pressed) || ((gp.buttons[7] && gp.buttons[7].value || 0) > 0.65);
            const gpJump = (gp.buttons[3] && gp.buttons[3].pressed) || padState.up; 

            // Combine keyboard and gamepad directions for directional attacks
            const combinedKeys = {
                left: keyState.left || padState.left,
                right: keyState.right || padState.right,
                up: keyState.up || padState.up,
                down: keyState.down || padState.down
            };

            if (gpAttack && !prevPadState[pIndex].attack) player.attack(getAttackType('neutral', combinedKeys));
            if (gpSpecial && !prevPadState[pIndex].special) player.attack(getAttackType('special', combinedKeys));
            if (gpFinalSmash && !prevPadState[pIndex].finalSmash) requestFinalSmash(pIndex);
            if (gpJump && !prevPadState[pIndex].jump) player.tryJump();

            // Save state to prevent button-holding spam
            prevPadState[pIndex].jump = gpJump;
            prevPadState[pIndex].attack = gpAttack;
            prevPadState[pIndex].special = gpSpecial;
            prevPadState[pIndex].finalSmash = gpFinalSmash;
        }

        // ==========================================
        // GAME CLASSES
        // ==========================================

        class Player {
            constructor(id, data, x, y, pIndex, skinIndex) {
                this.id = id;
                this.data = data;
                this.pIndex = pIndex;
                this.skinIndex = skinIndex;
                this.skinColor = data.skins[skinIndex];
                this.width = 2;
                this.height = 3.5;
                this.depth = 2;

                this.pos = new THREE.Vector3(x, y, 0);
                this.vel = new THREE.Vector3(0, 0, 0);
                this.grounded = false;
                this.facing = pIndex === 0 ? 1 : -1;
                this.jumpsLeft = 2;
                
                this.percent = 0;
                this.finalSmashCharge = 0;
                this.finalSmashActive = false;
                this.finalSmashConfig = null;
                this.stocks = 3;
                this.hitstun = 0;
                this.invuln = 0;
                this.state = 'idle';
                this.actionFrame = 0;
                this.currentMove = null;
                
                // Animation properties
                this.baseRotationY = 0;
                this.isLoadedModel = false; 
                this.loadedModel = null;
                this.animationModels = {}; 
                this.mixers = {}; // AnimationMixers for Mixamo data

                const geo = new THREE.BoxGeometry(this.width, this.height, this.depth);
                const mat = new THREE.MeshStandardMaterial({ color: this.skinColor, roughness: 0.4, metalness: 0.1, emissive: this.skinColor, emissiveIntensity: 0.1 });
                
                this.mesh = new THREE.Group();
                
                this.bodyMesh = new THREE.Mesh(geo, mat);
                this.bodyMesh.castShadow = true;
                this.bodyMesh.receiveShadow = true;
                
                const outlineMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
                const outlineMesh = new THREE.Mesh(geo, outlineMat);
                outlineMesh.scale.multiplyScalar(1.05);
                this.bodyMesh.add(outlineMesh);
                
                this.mesh.add(this.bodyMesh);
                
                const eyeGeo = new THREE.BoxGeometry(0.5, 0.5, 0.6);
                const eyeMat = new THREE.MeshBasicMaterial({color: 0xffffff});
                this.eye = new THREE.Mesh(eyeGeo, eyeMat);
                this.eye.position.set(0.5, 1, 1);
                this.bodyMesh.add(this.eye);

                const gltfLoader = new THREE.GLTFLoader();
                const fbxLoader = new THREE.FBXLoader();
                const textureLoader = new THREE.TextureLoader();

                // NEW: Stand Mechanic Pre-Loader!
                if (data.standData) {
                    fbxLoader.load(data.standData.modelUrl, (loadedObj) => {
                        this.standMesh = loadedObj;
                        let sScale = data.standData.scale || 1;
                        this.standMesh.scale.set(sScale, sScale, sScale);

                        // Apply the standalone texture specifically to the Stand mesh
                        const spTex = textureLoader.load(data.standData.textureUrl);
                        spTex.flipY = true;
                        
                        this.standMesh.traverse((node) => {
                            if (node.isMesh) {
                                node.castShadow = true;
                                if(node.material) {
                                    if(Array.isArray(node.material)) node.material.forEach(m => { m.map = spTex; m.needsUpdate = true; });
                                    else { node.material.map = spTex; node.material.needsUpdate = true; }
                                }
                            }
                        });

                        // Set up Stand Animation Mixer (Punching!)
                        this.standMixer = new THREE.AnimationMixer(this.standMesh);
                        if(loadedObj.animations && loadedObj.animations.length > 0) {
                            this.standAction = this.standMixer.clipAction(loadedObj.animations[0]);
                            this.standAction.play();
                        }
                        
                        this.standMesh.visible = false;
                        this.mesh.add(this.standMesh); // Attach Stand directly to the Player's Group!
                    });
                }

                // Pre-load specific static textures if any exist
                const loadedStaticTextures = {};
                if (data.staticTextures) {
                    for (const [matName, texUrl] of Object.entries(data.staticTextures)) {
                        loadedStaticTextures[matName] = textureLoader.load(texUrl);
                    }
                }
                
                // Pre-load specific skin-dependent textures
                if (data.multiSkinTextures) {
                    for (const [matName, urls] of Object.entries(data.multiSkinTextures)) {
                        if (urls[this.skinIndex]) {
                            loadedStaticTextures[matName] = textureLoader.load(urls[this.skinIndex]);
                        }
                    }
                }

                let modelsToLoad = [];
                if (data.modelUrls) {
                    for (const [stateName, url] of Object.entries(data.modelUrls)) {
                        modelsToLoad.push({ state: stateName, url: url });
                    }
                } else if (data.skinModels && data.skinModels[this.skinIndex]) {
                    // NEW ENGINE FEATURE: Load a completely different file based on the selected skin!
                    modelsToLoad.push({ state: 'single', url: data.skinModels[this.skinIndex] });
                } else if (data.modelUrl) {
                    modelsToLoad.push({ state: 'single', url: data.modelUrl });
                }

                modelsToLoad.forEach((item) => {
                    if(!item.url || item.url.includes('LINK_TO_')) return; 
                    
                    const isFBX = item.url.toLowerCase().endsWith('.fbx');
                    const loader = isFBX ? fbxLoader : gltfLoader;
                    
                    loader.load(item.url, (loadedObj) => {
                        const model = isFBX ? loadedObj : loadedObj.scene;
                        
                        // Apply the configurable scale (and check for specific animation overrides!)
                        let scale = data.modelScale || 1;
                        if (data.customModelScales && data.customModelScales[item.state]) {
                            scale = data.customModelScales[item.state];
                        }
                        model.scale.set(scale, scale, scale); 
                        
                        model.position.y = -this.height / 2;
                        model.rotation.y = (Math.PI / 2) * this.facing;
                        
                        const originalMeshes = [];
                        model.traverse((node) => {
                            if (node.isMesh) originalMeshes.push(node);
                        });
                        
                        let customTexture = null;
                        if (data.skinUrls && data.skinUrls[this.skinIndex]) {
                            customTexture = textureLoader.load(data.skinUrls[this.skinIndex]);
                            // Fix: FBX needs flipY = true, GLTF needs false.
                            customTexture.flipY = isFBX; 
                            customTexture.wrapS = THREE.RepeatWrapping;
                            customTexture.wrapT = THREE.RepeatWrapping;
                        }
                        
                        originalMeshes.forEach((node) => {
                            node.castShadow = true;
                            node.receiveShadow = true;
                            
                            // Process Material Array or Single Material
                            const processMaterial = (mat) => {
                                // 1. Map specific image files to their target materials (poo.png, etc)
                                if (data.staticTextures && loadedStaticTextures[mat.name]) {
                                    mat.map = loadedStaticTextures[mat.name];
                                    mat.map.flipY = isFBX; // Fixes mapping on FBX sub-materials
                                    mat.map.wrapS = THREE.RepeatWrapping;
                                    mat.map.wrapT = THREE.RepeatWrapping;
                                    mat.color.setHex(0xffffff); 
                                    mat.needsUpdate = true;
                                }
                                
                                // 2. Map Skin colors to target clothing/body materials
                                let shouldTint = true;
                                if (data.skinMaterials && mat.name) {
                                    shouldTint = data.skinMaterials.includes(mat.name);
                                } else if (data.skinMaterials && !mat.name) {
                                    shouldTint = false;
                                }

                                if (shouldTint) {
                                    if (customTexture) {
                                        mat.map = customTexture;
                                        mat.color.setHex(0xffffff); 
                                    } else if (this.skinIndex > 0) {
                                        mat.color.setHex(this.skinColor); 
                                    }
                                }
                            };

                            if (node.material) {
                                if (Array.isArray(node.material)) {
                                    node.material = node.material.map(m => m.clone());
                                    node.material.forEach(m => processMaterial(m));
                                } else {
                                    node.material = node.material.clone();
                                    processMaterial(node.material);
                                }
                            }
                            
                            // Apply Cartoon Outline
                            const modelOutlineMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.BackSide });
                            const modelOutlineMesh = new THREE.Mesh(node.geometry, modelOutlineMat);
                            // Avoid skinning the skeleton for the outline mesh (prevents mixamo bone errors)
                            modelOutlineMesh.scale.multiplyScalar(1.05);
                            
                            // Only add outlines to static meshes (Rigged/Skinned FBX outlines require special handling, skipping outline on rigged meshes for stability)
                            if (!node.isSkinnedMesh) {
                                node.add(modelOutlineMesh);
                            }
                        });
                        
                        // Setup Mixamo Animation Mixer if movement data exists
                        const anims = isFBX ? loadedObj.animations : loadedObj.animations;
                        if (anims && anims.length > 0) {
                            const mixer = new THREE.AnimationMixer(model);
                            const action = mixer.clipAction(anims[0]);
                            action.play();
                            this.mixers[item.state] = mixer;
                        }

                        if (item.state === 'single') {
                            this.loadedModel = model;
                            this.mesh.add(model);
                        } else {
                            model.visible = false;
                            this.animationModels[item.state] = model;
                            this.mesh.add(model);
                        }
                        
                        this.mesh.remove(this.bodyMesh); 
                        this.isLoadedModel = true; 
                    });
                });

                this.mesh.position.copy(this.pos);
                scene.add(this.mesh);
            }

            tryJump() {
                if (this.hitstun > 0 || this.state === 'attack') return;
                if (this.grounded || this.jumpsLeft > 0) {
                    this.vel.y = this.data.jump;
                    this.grounded = false;
                    this.jumpsLeft--;
                }
            }

            attack(type) {
                if (this.hitstun > 0 || this.state === 'attack') return;
                
                // Retrieve the specific directional move
                let move = this.data.moves[type];
                
                // Fallback system: if player pressed up+attack but character lacks up_attack, do normal attack
                if (!move) {
                    if (type.includes('special')) move = this.data.moves['special'];
                    else move = this.data.moves['neutral'];
                }
                if (!move) return;

                this.state = 'attack';
                this.currentMove = move;
                this.actionFrame = (move.duration || 10) + (move.startup || 0);
            }

            takeDamage(dmg, kb, kbAngleX, kbAngleY, attackerFacing) {
                if (this.invuln > 0 || this.stocks <= 0) return false;
                this.percent += dmg;
                const kbScale = ((((this.percent / 10) + (this.percent * dmg / 20)) * this.data.weight) + 18) * 0.01;
                const totalKb = (kb * kbScale);

                this.vel.x = totalKb * kbAngleX * attackerFacing;
                this.vel.y = totalKb * kbAngleY;

                this.hitstun = Math.floor(totalKb * 15);
                this.state = 'hit';
                this.actionFrame = 0;
                
                createHitEffect(this.pos.x, this.pos.y, totalKb);
                return true;
            }

            die() {
                this.stocks--;
                this.percent = 0;
                if (this.stocks <= 0) {
                    this.mesh.visible = false;
                    this.pos.set(0, -1000, 0); // Hide dead players completely
                    this.vel.set(0, 0, 0);
                    checkWinCondition();
                    return;
                }
                const startX = [-15, 15, -5, 5];
                const stage = STAGES[currentStageId];
                const spawn = stage && stage.spawnPoints && stage.spawnPoints[this.pIndex];
                const spawnX = spawn && Number.isFinite(Number(spawn.x)) ? Number(spawn.x) : startX[this.pIndex];
                const spawnY = spawn && Number.isFinite(Number(spawn.y)) ? Number(spawn.y) : 20;
                this.pos.set(spawnX, spawnY, 0);
                this.vel.set(0, 0, 0);
                this.invuln = 120;
                this.hitstun = 0;
                this.state = 'idle';
                if(this.loadedModel) this.loadedModel.rotation.set(0,0,0);
            }

            update(input) {
                if (this.invuln > 0) {
                    this.invuln--;
                    this.bodyMesh.material.opacity = (this.invuln % 10 < 5) ? 0.3 : 1.0;
                    this.bodyMesh.material.transparent = true;
                } else {
                    this.bodyMesh.material.opacity = 1.0;
                    this.bodyMesh.material.transparent = false;
                }

                if (this.hitstun > 0) {
                    this.hitstun--;
                    if (this.hitstun <= 0) this.state = 'fall';
                }

                if (this.state === 'attack') {
                    this.actionFrame--;
                    if (this.actionFrame === (this.currentMove && this.currentMove.duration || 10) && this.currentMove) {
                        this.executeMove(this.currentMove);
                    }
                    if (this.actionFrame <= 0) {
                        this.state = this.grounded ? 'idle' : 'fall';
                        this.currentMove = null;
                        this.mesh.rotation.y = this.baseRotationY; // Reset spin
                    }
                }

                if (!this.grounded && !this.finalSmashActive) this.vel.y -= 0.015;

                if (this.hitstun <= 0 && this.state !== 'attack' && !this.finalSmashActive) {
                    if (input.left) {
                        this.vel.x = -this.data.speed;
                        this.facing = -1;
                        this.state = 'run';
                        this.baseRotationY = THREE.MathUtils.lerp(this.baseRotationY, -0.4, 0.2);
                    } else if (input.right) {
                        this.vel.x = this.data.speed;
                        this.facing = 1;
                        this.state = 'run';
                        this.baseRotationY = THREE.MathUtils.lerp(this.baseRotationY, 0.4, 0.2);
                    } else {
                        this.vel.x *= (this.grounded ? 0.7 : 0.9);
                        if (Math.abs(this.vel.x) < 0.01) this.vel.x = 0;
                        if(this.grounded) this.state = 'idle';
                        this.baseRotationY = THREE.MathUtils.lerp(this.baseRotationY, 0, 0.2);
                    }
                    if (input.down && !this.grounded && this.vel.y < 0) this.vel.y -= 0.02;
                }
                
                // Dash physics override
                if (this.state === 'attack' && this.currentMove && this.currentMove.type.includes('dash') && this.actionFrame < (this.currentMove.duration || 10)) {
                    if (this.currentMove.type === 'recovery_dash') {
                        this.vel.x = this.currentMove.vx * this.facing;
                        this.vel.y = this.currentMove.vy;
                    } else {
                        this.vel.x = this.currentMove.speed * this.facing;
                        this.vel.y = 0; 
                    }
                    if (this.actionFrame % 3 === 0) this.executeMove(this.currentMove); 
                }

                this.pos.add(this.vel);
                
                // Collision Logic
                this.grounded = false;
                const stage = STAGES[currentStageId];
                
                if (this.vel.y <= 0) {
                    for (const plat of stage.platforms) {
                        const hit = plat.collision || plat;
                        if (hit.enabled === false || ((hit.type || plat.type) === 'pass-through' && input.down)) continue;
                        const pLeft = hit.x - hit.w/2, pRight = hit.x + hit.w/2, pTop = hit.y + (hit.h||2)/2; 
                        
                        if (this.pos.x + this.width/2 > pLeft && this.pos.x - this.width/2 < pRight) {
                            const feetY = this.pos.y - this.height/2;
                            const prevFeetY = feetY - this.vel.y;
                            if (feetY <= pTop && prevFeetY >= pTop - 0.5) {
                                this.pos.y = pTop + this.height/2;
                                this.vel.y = 0;
                                this.grounded = true;
                                this.jumpsLeft = 2;
                            }
                        }
                    }
                }

                if (this.pos.y < stage.bounds.bottom || this.pos.x < -stage.bounds.x || this.pos.x > stage.bounds.x || this.pos.y > stage.bounds.y) {
                    this.die();
                }

                // =====================================
                // PROCEDURAL & MULTI-MODEL ANIMATION
                // =====================================
                this.mesh.position.copy(this.pos);
                this.mesh.scale.set(1, 1, 1); 
                this.eye.position.set(0.5 * this.facing, 1, 1);
                
                // Swap Multi-Models based on state
                let activeStateKey = this.state;

                // Airborne override for animation purposes
                if (!this.grounded && this.state !== 'attack' && this.state !== 'hit') {
                    if (this.vel.y > 0) activeStateKey = 'jump';
                    else activeStateKey = 'fall';
                }

                // Special Move override 
                if (this.state === 'attack' && this.currentMove && (this.currentMove === this.data.moves['special'] || this.currentMove === this.data.moves['up_special'] || this.currentMove === this.data.moves['down_special'])) {
                    if (this.animationModels['special']) {
                        activeStateKey = 'special';
                    }
                }
                if (this.finalSmashActive) activeStateKey = this.animationModels['special'] ? 'special' : (this.animationModels['attack'] ? 'attack' : 'single');

                if (Object.keys(this.animationModels).length > 0) {
                    for (const key in this.animationModels) this.animationModels[key].visible = false;
                    
                    let activeModel = this.animationModels[activeStateKey];
                    if (!activeModel && activeStateKey === 'special') { activeModel = this.animationModels['attack']; activeStateKey = 'attack'; }
                    if (!activeModel && activeStateKey === 'fall') { activeModel = this.animationModels['jump']; activeStateKey = 'jump'; }
                    if (!activeModel && activeStateKey === 'jump') { activeModel = this.animationModels['idle']; activeStateKey = 'idle'; }
                    if (!activeModel && activeStateKey === 'run') { activeModel = this.animationModels['idle']; activeStateKey = 'idle'; }
                    if (!activeModel && activeStateKey === 'hit') { activeModel = this.animationModels['fall']; activeStateKey = 'fall'; }
                    if (!activeModel) { activeModel = this.animationModels['idle']; activeStateKey = 'idle'; } 
                    
                    if (activeModel) {
                        activeModel.visible = true;
                        this.loadedModel = activeModel; 
                    }
                }

                // Smoothly turn the active 3D model to face the moving direction
                if (this.loadedModel && !this.loadedModel.isSkinnedMesh) {
                    let targetRotation = (Math.PI / 2) * this.facing;
                    
                    // Apply any specific rotation fixes for wonky Mixamo exports
                    if (this.data.modelRotationOffsets && this.data.modelRotationOffsets[activeStateKey]) {
                        targetRotation += this.data.modelRotationOffsets[activeStateKey];
                    }
                    
                    this.loadedModel.rotation.y = THREE.MathUtils.lerp(this.loadedModel.rotation.y, targetRotation, 0.3);
                }
                
                // Play internal FBX/Mixamo animations
                if (this.mixers[activeStateKey]) {
                    this.mixers[activeStateKey].update(1/60); // Update the animation at 60 FPS
                }

                // =====================================
                // STAND MECHANIC LOGIC
                // =====================================
                if (this.standMesh) {
                    if (this.state === 'attack' || this.finalSmashActive) {
                        this.standMesh.visible = true;
                        this.standMixer.update(1/60);
                        
                        // Spawn the stand in front of the player perfectly aligned with the hitbox
                        const standOffsetX = this.data.standData.offsetX || 1.5;
                        const standOffsetY = this.data.standData.offsetY || 0;
                        this.standMesh.position.set(standOffsetX * this.facing, standOffsetY, 0);
                        
                        // Ensure the stand faces the correct direction
                        this.standMesh.rotation.y = (Math.PI / 2) * this.facing;
                        if(this.data.standData.rotationOffset) {
                            this.standMesh.rotation.y += this.data.standData.rotationOffset;
                        }
                    } else {
                        // Hide and reset stand animation when not attacking
                        this.standMesh.visible = false;
                        if(this.standAction) {
                            this.standAction.reset();
                            this.standAction.play();
                        }
                    }
                }
                
                const stretchLimit = this.isLoadedModel ? 0.03 : 0.4;
                const leanAmount = this.isLoadedModel ? 0.4 : 1.0;
                const hopHeight = this.isLoadedModel ? 0.15 : 0.4;
                
                if (this.hitstun > 0) {
                    // Tumbling when hit
                    this.mesh.rotation.z += 0.3 * this.facing;
                    this.mesh.rotation.y = this.baseRotationY;
                } else if (this.state === 'attack' || this.finalSmashActive) {
                    // Upgraded Attack Animations
                    const totalFrames = (this.currentMove && this.currentMove.duration ? this.currentMove.duration : 10) + (this.currentMove && this.currentMove.startup ? this.currentMove.startup : 0);
                    const progress = this.finalSmashActive ? Math.min(1, finalSmashSequence.elapsed / finalSmashSequence.duration) : (totalFrames > 0 ? 1 - (this.actionFrame / totalFrames) : 1);

                    if (this.finalSmashActive) {
                        this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, -0.12 * Math.sin(progress * Math.PI) * this.facing, 0.25);
                        this.mesh.scale.setScalar(1 + Math.sin(progress * Math.PI) * 0.08);
                    } else if (this.currentMove && this.currentMove.type.includes('dash')) {
                        this.mesh.rotation.z = -1.0 * leanAmount * this.facing; // Fly pose
                    } else if (this.currentMove && this.currentMove.type === 'projectile') {
                        // Spitting / Shooting Animation (Recoil back, then snap forward)
                        if (progress < 0.4) {
                            this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, 0.4 * leanAmount * this.facing, 0.3); // Lean back
                            if (!this.isLoadedModel) this.mesh.scale.set(1.2, 0.8, 1.2); // Only squash placeholders
                        } else if (progress < 0.7) {
                            this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, -0.6 * leanAmount * this.facing, 0.6); // Snap forward
                            if (!this.isLoadedModel) this.mesh.scale.set(0.8, 1.3, 0.8); // Only stretch placeholders
                        } else {
                            this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, 0, 0.2); // Recover
                        }
                    } else {
                        // Melee Strike (Wind up and punch)
                        if (progress < 0.3) {
                            this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, 0.3 * leanAmount * this.facing, 0.4); // Pull back
                        } else if (progress < 0.6) {
                            this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, -0.5 * leanAmount * this.facing, 0.6); // Strike forward
                        } else {
                            this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, 0, 0.2); // Recover
                        }
                    }
                    this.mesh.rotation.y = this.baseRotationY;
                } else if (!this.grounded) {
                    // Squash and Stretch based on vertical velocity
                    const stretch = Math.min(Math.abs(this.vel.y) * 1.5, stretchLimit);
                    this.mesh.scale.set(1 - stretch, 1 + stretch, 1 - stretch);
                    this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, 0, 0.2);
                    this.mesh.rotation.y = this.baseRotationY;
                } else if (this.state === 'run') {
                    // Run Lean + Hop
                    this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, -0.2 * leanAmount * this.facing, 0.3); // Subtle lean
                    this.mesh.position.y += Math.abs(Math.sin(globalTime * 0.4)) * hopHeight; // Gentle hop
                    this.mesh.rotation.y = this.baseRotationY;
                } else {
                    // Idle Breathing
                    this.mesh.rotation.z = THREE.MathUtils.lerp(this.mesh.rotation.z, 0, 0.2);
                    this.mesh.scale.set(1, 1 + Math.sin(globalTime * 0.1) * (this.isLoadedModel ? 0.02 : 0.05), 1); // Subtle breathing
                    this.mesh.rotation.y = this.baseRotationY;
                }
            }

            executeMove(move) {
                if (move.type === 'melee' || move.type.includes('dash')) {
                    hitboxes.push(new Hitbox(this.pos.x + ((move.ox||0) * this.facing), this.pos.y + (move.oy||0), move.w||3, move.h||3, move.dmg, move.kb, this.pIndex, this.facing));
                } else if (move.type === 'projectile') {
                    // Projectiles now support angled shots based on their properties
                    const vx = move.vx !== undefined ? move.vx * this.facing : (move.speed || 0.4) * this.facing;
                    const vy = move.vy || 0;
                    projectiles.push(new Projectile(this.pos.x + (1.5 * this.facing), this.pos.y + 0.5, vx, vy, move, this.pIndex));
                }
            }

            getBounds() {
                return { left: this.pos.x - this.width/2, right: this.pos.x + this.width/2, bottom: this.pos.y - this.height/2, top: this.pos.y + this.height/2 };
            }
        }

        class Hitbox {
            constructor(x, y, w, h, dmg, kb, ownerId, facing) {
                this.x = x; this.y = y; this.w = w; this.h = h; this.dmg = dmg; this.kb = kb; this.ownerId = ownerId; this.facing = facing; this.life = 2; 
                this.mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, 2), new THREE.MeshBasicMaterial({color: 0xff0000, transparent: true, opacity: 0.2}));
                this.mesh.position.set(x, y, 0);
                scene.add(this.mesh);
            }
            update() {
                this.life--;
                if (this.life <= 0) scene.remove(this.mesh);
            }
        }

        class Projectile {
            constructor(x, y, vx, vy, data, ownerId) {
                this.pos = new THREE.Vector3(x, y, 0); this.vel = new THREE.Vector3(vx, vy, 0); this.data = data; this.ownerId = ownerId; this.life = data.life || 60;
                this.mesh = new THREE.Mesh(new THREE.SphereGeometry(data.w), new THREE.MeshStandardMaterial({color: data.color, emissive: data.color, emissiveIntensity: 0.8}));
                this.mesh.position.copy(this.pos);
                scene.add(this.mesh);
            }
            update() {
                this.pos.add(this.vel);
                this.mesh.position.copy(this.pos);
                this.life--;
                if(this.life % 2 === 0) hitboxes.push(new Hitbox(this.pos.x, this.pos.y, this.data.w*2, this.data.w*2, this.data.dmg, this.data.kb, this.ownerId, this.vel.x > 0 ? 1 : -1));
                if (this.life <= 0) scene.remove(this.mesh);
            }
        }

        function createHitEffect(x, y, intensity) {
            const mesh = new THREE.Mesh(new THREE.RingGeometry(0.5, Math.max(1.5, intensity), 16), new THREE.MeshBasicMaterial({color: 0xffdd00, side: THREE.DoubleSide, transparent: true, opacity: 1}));
            mesh.position.set(x, y, 1);
            scene.add(mesh);
            let frame = 0;
            const animateEffect = () => {
                frame++; mesh.scale.x += 0.3; mesh.scale.y += 0.3; mesh.material.opacity -= 0.1; mesh.rotation.z += 0.2;
                if (frame < 10) requestAnimationFrame(animateEffect); else scene.remove(mesh);
            }
            animateEffect();
        }

        // ==========================================
        // MAIN GAME LOGIC
        // ==========================================

        function createMeshFromShape(data) {
            let geo;
            if (data.shape === 'box') geo = new THREE.BoxGeometry(data.w||2, data.h||2, data.d||2);
            else if (data.shape === 'cylinder') geo = new THREE.CylinderGeometry(data.radius||((data.w||2)/2), data.radius||((data.w||2)/2), data.h||2, 16);
            else if (data.shape === 'sphere') geo = new THREE.SphereGeometry(data.radius||((data.w||2)/2), 16, 16);
            else if (data.shape === 'tetrahedron') geo = new THREE.TetrahedronGeometry(data.size||2);
            else if (data.shape === 'cone') geo = new THREE.ConeGeometry(data.radius||((data.w||2)/2), data.h||2, data.segments||16);
            else if (data.shape === 'torus') geo = new THREE.TorusGeometry(data.radius||((data.w||20)/2), data.tube||0.5, 16, 64);
            else geo = new THREE.BoxGeometry(2,2,2);

            const matParams = { color: data.color, roughness: 0.7, metalness: 0.2 };
            if (data.emissive) { matParams.emissive = data.emissive; matParams.emissiveIntensity = data.emissiveIntensity || 0.5; }
            const mat = new THREE.MeshStandardMaterial(matParams);
            
            const mesh = new THREE.Mesh(geo, mat);
            mesh.position.set(data.x||0, data.y||0, data.z||0);
            if (data.rx) mesh.rotation.x = data.rx;
            if (data.ry) mesh.rotation.y = data.ry;
            if (data.rz) mesh.rotation.z = data.rz;
            
            mesh.castShadow = true; mesh.receiveShadow = true;
            if(data.animated) mesh.userData.animated = data.animated;
            if(data.spin) mesh.userData.spin = data.spin;
            if(data.shape === 'box' && data.emissive) mesh.userData.originalEmissive = data.emissiveIntensity;

            return mesh;
        }

        function loadStageObject(data, collection) {
            if (data.modelUrl) {
                const modelUrl = normalizeStageAssetURL(data.modelUrl);
                const done = object => {
                    const asset = object.scene || object;
                    asset.scale.setScalar(Number(data.scale) || 1);
                    asset.updateMatrixWorld(true);
                    const bounds = new THREE.Box3().setFromObject(asset);
                    if (!bounds.isEmpty()) asset.position.sub(bounds.getCenter(new THREE.Vector3()));
                    const root = new THREE.Group();
                    root.position.set(Number(data.x) || 0, Number(data.y) || 0, Number(data.z) || 0);
                    root.rotation.set(Number(data.rx) || 0, Number(data.ry) || 0, Number(data.rz) || 0);
                    root.add(asset);
                    if (data.spin) root.userData.spin = data.spin;
                    if (data.textureUrl) {
                        const tex = new THREE.TextureLoader().load(normalizeStageAssetURL(data.textureUrl));
                        asset.traverse(node => { if (node.isMesh && node.material) { node.material = node.material.clone(); node.material.map = tex; node.material.needsUpdate = true; } });
                    }
                    asset.traverse(node => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
                    scene.add(root); collection.push(root);
                };
                if (/\.fbx(?:$|\?)/i.test(modelUrl)) new THREE.FBXLoader().load(modelUrl, done, undefined, err => console.warn('Stage FBX failed to load:', modelUrl, err));
                else new THREE.GLTFLoader().load(modelUrl, done, undefined, err => console.warn('Stage model failed to load:', modelUrl, err));
                return;
            }
            const mesh = createMeshFromShape(data);
            if (data.textureUrl && mesh.material) {
                mesh.material.map = new THREE.TextureLoader().load(normalizeStageAssetURL(data.textureUrl));
                mesh.material.needsUpdate = true;
            }
            scene.add(mesh); collection.push(mesh);
        }

        function startGame() {
            removeSmashBall();
            smashBallSpawnCountdown = 7 + Math.random() * 8;
            finalSmashSequence = null;
            document.getElementById('cinematic-overlay').classList.remove('active', 'time-stop');
            document.getElementById('smash-ball-notice').classList.add('hidden');
            const stage = STAGES[currentStageId];
            scene.background = new THREE.Color(stage.bgColor);
            scene.fog = new THREE.FogExp2(stage.bgColor, 0.015);
            const lighting = stage.lighting || {};
            stageAmbientLight.color.setHex(parseColor(lighting.ambientColor ?? '#ffffff'));
            stageAmbientLight.intensity = Number(lighting.ambientIntensity ?? 0.4);
            stageDirectionalLight.color.setHex(parseColor(lighting.directionalColor ?? '#ffffff'));
            stageDirectionalLight.intensity = Number(lighting.directionalIntensity ?? 0.8);
            const lightPos = lighting.directionalPosition || { x: 20, y: 40, z: 20 };
            stageDirectionalLight.position.set(Number(lightPos.x) || 0, Number(lightPos.y) || 0, Number(lightPos.z) || 0);
            stageSkyboxSpinSpeed = Number(stage.skyboxSpinSpeed) || 0;

            if (stage.backgroundImageUrl && !stage.skyboxUrl) {
                new THREE.TextureLoader().load(normalizeStageAssetURL(stage.backgroundImageUrl), tex => {
                    tex.encoding = THREE.sRGBEncoding;
                    scene.background = tex;
                }, undefined, err => console.warn('Stage background image failed to load:', stage.backgroundImageUrl, err));
            }

            if (stage.skyboxUrl) {
                new THREE.TextureLoader().load(normalizeStageAssetURL(stage.skyboxUrl), tex => {
                    tex.encoding = THREE.sRGBEncoding;
                    const mat = new THREE.MeshBasicMaterial({ map: tex, side: THREE.BackSide, depthWrite: false, fog: false });
                    stageSkyboxMesh = new THREE.Mesh(new THREE.SphereGeometry(500, 48, 32), mat);
                    stageSkyboxMesh.renderOrder = -1000;
                    stageSkyboxTexture = tex;
                    scene.add(stageSkyboxMesh);
                }, undefined, err => console.warn('Skybox failed to load:', err));
            }

            stage.platforms.forEach(plat => loadStageObject(plat, stageMeshes));
            if (stage.decorations) { stage.decorations.forEach(dec => loadStageObject(dec, decorationMeshes)); }
            if (stage.backgroundLayers) stage.backgroundLayers.forEach(layer => {
                if (!layer.url) return;
                new THREE.TextureLoader().load(normalizeStageAssetURL(layer.url), tex => {
                    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: Number(layer.opacity ?? 1), depthWrite: false, side: THREE.DoubleSide, fog: false });
                    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(Number(layer.width) || 40, Number(layer.height) || 24), mat);
                    mesh.position.set(Number(layer.x) || 0, Number(layer.y) || 0, Number(layer.z ?? -30));
                    mesh.renderOrder = Number(layer.order) || 0;
                    scene.add(mesh); decorationMeshes.push(mesh);
                }, undefined, err => console.warn('Background layer failed to load:', err));
            });

            const startX = [-15, 15, -5, 5];
            for (let i = 0; i < 4; i++) {
                if (pTypes[i] !== -1 && pSelections[i]) {
                    const spawn = stage.spawnPoints && stage.spawnPoints[i];
                    const spawnX = spawn && Number.isFinite(Number(spawn.x)) ? Number(spawn.x) : startX[i];
                    const spawnY = spawn && Number.isFinite(Number(spawn.y)) ? Number(spawn.y) : 10;
                    players.push(new Player(pSelections[i], CHARACTERS[pSelections[i]], spawnX, spawnY, i, pSkins[i]));
                    document.getElementById(`hud-panel-${i}`).classList.remove('hidden');
                    document.getElementById(`hud-name-p${i+1}`).innerText = CHARACTERS[pSelections[i]].name;
                } else {
                    document.getElementById(`hud-panel-${i}`).classList.add('hidden');
                }
            }
            
            document.getElementById('hud').classList.remove('hidden');
            document.getElementById('match-timer').innerText = "GO!";
            setTimeout(() => { const timer = document.getElementById('match-timer'); if (timer.innerText === 'GO!') timer.innerText = ''; }, 1500);

            camera.position.set(0, 10, 50); camera.lookAt(0,0,0);
            gameState = 'playing'; updateHUD();
            if (onlineRole === 'host') {
                onlineMatchStarted = true;
                sendOnlineMessage({ type:'match-start', stageId:currentStageId, stage:STAGES[currentStageId],
                    selections:pSelections, skins:pSkins, smashCountdown:smashBallSpawnCountdown });
            }
        }

        function checkCollisions() {
            for (let i = hitboxes.length - 1; i >= 0; i--) {
                const hb = hitboxes[i]; let hitSomeone = false;
                if (smashBall && smashBall.hitCooldown <= 0) {
                    const dx = Math.abs(hb.x - smashBall.root.position.x);
                    const dy = Math.abs(hb.y - smashBall.root.position.y);
                    if (dx < smashBall.radius + hb.w / 2 && dy < smashBall.radius + hb.h / 2) {
                        smashBall.health -= Math.max(5, (hb.dmg || 0) * 1.5);
                        smashBall.hitCooldown = 0.24;
                        smashBall.lastOwner = hb.ownerId;
                        smashBall.root.scale.setScalar(1.18);
                        smashBall.root.children[0].material.emissive.setHex(smashBall.health < smashBall.maxHealth * 0.4 ? 0xff3b30 : 0xffb300);
                        showSmashBallNotice(`Smash Ball • ${Math.max(0, Math.ceil(smashBall.health))} HP`, 650);
                        setTimeout(() => { if (smashBall) smashBall.root.scale.setScalar(1); }, 90);
                        if (smashBall.health <= 0) breakSmashBall(hb.ownerId);
                    }
                }
                for (let p of players) {
                    if (p.pIndex === hb.ownerId || p.stocks <= 0) continue; 
                    const bounds = p.getBounds();
                    if (hb.x+hb.w/2 > bounds.left && hb.x-hb.w/2 < bounds.right && hb.y+hb.h/2 > bounds.bottom && hb.y-hb.h/2 < bounds.top) {
                        if (p.takeDamage(hb.dmg, hb.kb, 0.707, 0.707, hb.facing)) {
                            hitSomeone = true;
                        }
                        projectiles.forEach(proj => { if (proj.ownerId === hb.ownerId) proj.life = 0; });
                    }
                }
                if (hitSomeone) hb.life = 0; 
            }
        }

        function getCPUInput(cpu, level) {
            const input = { left: false, right: false, up: false, down: false };
            if (!cpu || cpu.hitstun > 0 || cpu.state === 'attack') return input;

            // CPU Reaction Time / Hesitation filter based on level
            if (Math.random() > (0.1 + (level * 0.1))) return input;

            // Find closest active target
            let target = null;
            let minDist = Infinity;
            for (let p of players) {
                if (p.pIndex === cpu.pIndex || p.stocks <= 0) continue;
                let dist = cpu.pos.distanceTo(p.pos);
                if (dist < minDist) { minDist = dist; target = p; }
            }
            
            if (!target) return input; // If nobody is left, just stand still

            const dx = target.pos.x - cpu.pos.x;
            const dy = target.pos.y - cpu.pos.y;
            const dist = minDist;

            const stage = STAGES[currentStageId];
            const isOffStage = cpu.pos.x < -stage.bounds.x + 5 || cpu.pos.x > stage.bounds.x - 5 || cpu.pos.y < stage.bounds.bottom + 10;
            
            // CPU Recovery Logic
            if (isOffStage || cpu.pos.y < -3) {
                // High levels recover flawlessly. Low levels might just fall to their doom.
                if (Math.random() < (level / 9)) {
                    if (cpu.pos.x < 0) input.right = true;
                    if (cpu.pos.x > 0) input.left = true;
                    
                    if (cpu.pos.y < target.pos.y && !cpu.grounded) {
                        if (cpu.jumpsLeft > 0) {
                            cpu.tryJump();
                            input.up = true;
                        } else if (cpu.vel.y < 0) {
                            input.up = true;
                            cpu.attack(getAttackType('special', input)); // Up Special to save itself
                        }
                    }
                }
                return input;
            }

            // CPU Attack logic
            if (dist < 6) {
                let didAttack = false;
                let attackDir = { left: false, right: false, up: false, down: false };
                
                // Decide aim
                if (dy > 3) attackDir.up = true;
                else if (dy < -2) attackDir.down = true;
                else if (dx > 0) attackDir.right = true;
                else attackDir.left = true;

                // Attack probabilities scale drastically with level
                const attackProb = level * 0.015;
                const specialProb = level * 0.005;

                if (Math.random() < attackProb) {
                    cpu.attack(getAttackType('neutral', attackDir));
                    didAttack = true;
                } else if (Math.random() < specialProb) {
                    cpu.attack(getAttackType('special', attackDir));
                    didAttack = true;
                }

                // If not attacking, try to move slightly closer (or space out if high level)
                if (!didAttack) {
                    if (level >= 7 && Math.random() < 0.2) {
                        // High levels back away strategically
                        if (dx > 0) input.left = true;
                        if (dx < 0) input.right = true;
                    } else {
                        if (dx > 2) input.right = true;
                        if (dx < -2) input.left = true;
                    }
                }
            } else {
                // CPU Movement approach logic
                if (dx > 1) input.right = true;
                if (dx < -1) input.left = true;
                
                // Jump approach to catch high targets
                if (dy > 4 && Math.random() < (level * 0.02)) {
                    input.up = true;
                    cpu.tryJump();
                }
                
                // Dash approach occasionally (mostly high levels)
                if (level >= 5 && Math.random() < (level * 0.005)) {
                    input.right = dx > 0;
                    input.left = dx <= 0;
                    cpu.attack(getAttackType('special', input));
                }
            }
            return input;
        }

        function updateCamera() {
            let active = players.filter(p => p.stocks > 0);
            if (active.length === 0) return;
            
            let minX = active[0].pos.x, maxX = active[0].pos.x;
            let minY = active[0].pos.y, maxY = active[0].pos.y;
            
            for(let p of active) {
                minX = Math.min(minX, p.pos.x); maxX = Math.max(maxX, p.pos.x);
                minY = Math.min(minY, p.pos.y); maxY = Math.max(maxY, p.pos.y);
            }
            
            let centerX = (minX + maxX) / 2, centerY = (minY + maxY) / 2;
            let dist = Math.max(maxX - minX, maxY - minY, 15);

            camera.position.x += (centerX - camera.position.x) * 0.1;
            camera.position.y += ((centerY + 5) - camera.position.y) * 0.1; 
            let targetZ = Math.min(Math.max(dist * 1.0 + 25, 35), 90); 
            camera.position.z += (targetZ - camera.position.z) * 0.05;
            camera.lookAt(camera.position.x, camera.position.y - 5, 0);
            if (stageSkyboxMesh) stageSkyboxMesh.position.copy(camera.position);
        }

        function updateStageAnimations(deltaSeconds = 1 / 60) {
            if (stageSkyboxMesh) {
                stageSkyboxMesh.position.copy(camera.position);
                stageSkyboxMesh.rotation.y += stageSkyboxSpinSpeed * Math.PI / 180 * deltaSeconds;
            }
            decorationMeshes.forEach(mesh => {
                const spin = mesh.userData.spin;
                if (spin && spin.type === 'spin' && ['x', 'y', 'z'].includes(spin.axis)) {
                    mesh.rotation[spin.axis] += (Number(spin.speed) || 0) * Math.PI / 180 * deltaSeconds;
                }
                if(!mesh.userData.animated) return;
                const anim = mesh.userData.animated;
                if (anim === 'spin-float') { mesh.rotation.y += 0.01; mesh.rotation.x += 0.005; mesh.position.y += Math.sin(globalTime * 0.05) * 0.02; } 
                else if (anim === 'spin-float-offset') { mesh.rotation.y -= 0.015; mesh.rotation.z += 0.01; mesh.position.y += Math.cos(globalTime * 0.05) * 0.03; } 
                else if (anim === 'float-slow') { mesh.position.x += 0.02; if(mesh.position.x > 50) mesh.position.x = -50; } 
                else if (anim === 'float-slow-offset') { mesh.position.x -= 0.015; if(mesh.position.x < -50) mesh.position.x = 50; } 
                else if (anim === 'lava-pulse') { mesh.material.emissiveIntensity = (mesh.userData.originalEmissive || 0.8) + Math.sin(globalTime * 0.1) * 0.3; }
            });
        }

        function gameLoop() {
            requestAnimationFrame(gameLoop);
            const now = performance.now();
            const deltaSeconds = Math.min(Math.max((now - lastAnimationTimestamp) / 1000, 0), 0.1);
            lastAnimationTimestamp = now;
            globalTime++;

            updateGamepads(); // Poll controllers globally now

            if (gameState === 'menu' || gameState === 'result') {
                bgStars.rotation.y += 0.001; bgStars.rotation.x += 0.0005;
                camera.position.set(Math.sin(globalTime * 0.005) * 30, 15 + Math.sin(globalTime * 0.01) * 5, Math.cos(globalTime * 0.005) * 30 + 50);
                camera.lookAt(0, 5, 0);
                updateMenuVisuals();
            } 
            else if (gameState === 'playing') {
                if (!finalSmashSequence || finalSmashSequence.config.style !== 'time-stop') {
                    bgStars.rotation.y += 0.0002;
                    updateStageAnimations(deltaSeconds);
                }
                if (finalSmashSequence) {
                    updateFinalSmash(deltaSeconds);
                    updateHUD();
                } else {
                    updateSmashBall(deltaSeconds);
                    // Apply Inputs for ALL active players dynamically
                    players.forEach(p => {
                        if (p.stocks <= 0) return;
                        let input;
                        if (pTypes[p.pIndex] > 0) {
                            if (p.finalSmashCharge >= 100 && Math.random() < 0.025) requestFinalSmash(p.pIndex);
                            input = getCPUInput(p, pTypes[p.pIndex]); // CPU Input
                        } else {
                            // Human Input (Keyboard + Gamepad Merge)
                            input = {
                                left: keys[`p${p.pIndex+1}`].left || padKeys[`p${p.pIndex+1}`].left,
                                right: keys[`p${p.pIndex+1}`].right || padKeys[`p${p.pIndex+1}`].right,
                                up: keys[`p${p.pIndex+1}`].up || padKeys[`p${p.pIndex+1}`].up,
                                down: keys[`p${p.pIndex+1}`].down || padKeys[`p${p.pIndex+1}`].down
                            };
                        }
                        p.update(input);
                        reconcileOnlinePlayer(p, deltaSeconds);
                    });
                    
                    for (let i = projectiles.length - 1; i >= 0; i--) { projectiles[i].update(); if (projectiles[i].life <= 0) projectiles.splice(i, 1); }
                    if (onlineRole !== 'guest') checkCollisions(); // Host owns collision and stock outcomes.
                    for (let i = hitboxes.length - 1; i >= 0; i--) { hitboxes[i].update(); if (hitboxes[i].life <= 0) hitboxes.splice(i, 1); }
                    updateCamera(); updateHUD();
                }
            }
            if (renderer && scene && camera) renderer.render(scene, camera);
        }

        window.onload = function() { 
            initThree(); 
            initUI(); 
            gameLoop(); 
        };
