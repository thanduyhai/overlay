// ─── Grow a Garden 2 — Shared item database ────────────────────────────────
// Nguồn: gag.gg (crops-and-seed-values, pets-guide, gear-guide)
// id = "category:slug" — dùng làm khoá tra cứu khi giải mã link overlay

const RARITY_COLOR = {
    Common: '#9fb8a8',
    Uncommon: '#5cd66d',
    Rare: '#4fb0ff',
    Epic: '#c26bff',
    Legendary: '#ffb347',
    Mythic: '#ff4f81',
    Super: '#ffd23f',
    Secret: '#ff3b3b'
};

const RARITY_ORDER = ['Secret', 'Super', 'Mythic', 'Legendary', 'Epic', 'Rare', 'Uncommon', 'Common'];

// Variant chỉ áp dụng cho Pet: 0 none · 1 Big · 2 Mega · 3 Rainbow · 4 Big Rainbow · 5 Mega Rainbow
const VARIANT_LABEL = {
    0: null,
    1: 'BIG',
    2: 'MEGA',
    3: 'RAINBOW',
    4: 'BIG RAINBOW',
    5: 'MEGA RAINBOW'
};
const VARIANT_IS_RAINBOW = { 3: true, 4: true, 5: true };
const VARIANT_BADGE_COLOR = {
    1: '#7fd6ff',
    2: '#3fc1ff',
    3: 'rainbow',
    4: 'rainbow',
    5: 'rainbow'
};

const ITEMS_DB = {
    seed: [
        { name: "Star Fruit", rarity: "Super", image: "https://gag.gg/seeds/star-fruit-fruit.png" },
        { name: "Dragon's Breath", rarity: "Super", image: "https://gag.gg/wiki/Dragon's_BreathFruit.png" },
        { name: "Hypno Bloom", rarity: "Super", image: "https://gag.gg/wiki/Hypno_BloomFruit.png" },
        { name: "Sun Bloom", rarity: "Super", image: "https://gag.gg/seeds/sun-bloom-fruit.png" },
        { name: "Moon Bloom", rarity: "Super", image: "https://gag.gg/wiki/Moon_BloomFruit.png" },
        { name: "Eclipse Bloom", rarity: "Secret", image: "https://gag.gg/seeds/eclipse-bloom-fruit.png" },
        { name: "Venom Spitter", rarity: "Mythic", image: "https://gag.gg/wiki/Venom_SpitterFruit.png" },
        { name: "Poison Apple", rarity: "Mythic", image: "https://gag.gg/wiki/Poison_AppleFruit.png" },
        { name: "Pomegranate", rarity: "Mythic", image: "https://gag.gg/wiki/PomegranateFruit.png" },
        { name: "Venus Fly Trap", rarity: "Mythic", image: "https://gag.gg/wiki/Venus_Fly_TrapFruit.png" },
        { name: "Ghost Pepper", rarity: "Mythic", image: "https://gag.gg/wiki/Ghost_PepperFruit.png" },
        { name: "Mega Seed", rarity: "Mythic", image: "https://gag.gg/wiki/Mega_SeedFruit.png" },
        { name: "Rainbow Seed", rarity: "Mythic", image: "https://gag.gg/wiki/Rainbow_SeedFruit.png" },
        { name: "Fire Fern", rarity: "Legendary", image: "https://gag.gg/wiki/Fire_FernFruit.png" },
        { name: "Sunflower", rarity: "Legendary", image: "https://gag.gg/wiki/SunflowerFruit.png" },
        { name: "Cherry", rarity: "Legendary", image: "https://gag.gg/wiki/CherryFruit.png" },
        { name: "Acorn", rarity: "Legendary", image: "https://gag.gg/wiki/AcornFruit.png" },
        { name: "Dragon Fruit", rarity: "Legendary", image: "https://gag.gg/wiki/Dragon_FruitFruit.png" },
        { name: "Rocket Pop", rarity: "Legendary", image: "https://gag.gg/seeds/rocket-pop-fruit.png" },
        { name: "Gold Seed", rarity: "Legendary", image: "https://gag.gg/wiki/Gold_SeedFruit.png" },
        { name: "Poison Ivy", rarity: "Legendary", image: "https://gag.gg/wiki/Poison_IvyFruit.png" },
        { name: "Mango", rarity: "Epic", image: "https://gag.gg/wiki/MangoFruit.png" },
        { name: "Coconut", rarity: "Epic", image: "https://gag.gg/wiki/CoconutFruit.png" },
        { name: "Grape", rarity: "Epic", image: "https://gag.gg/wiki/GrapeFruit.png" },
        { name: "Banana", rarity: "Epic", image: "https://gag.gg/wiki/BananaFruit.png" },
        { name: "Green Bean", rarity: "Epic", image: "https://gag.gg/wiki/GreenBeanFruit.png" },
        { name: "Mushroom", rarity: "Epic", image: "https://gag.gg/wiki/MushroomFruit.png" },
        { name: "Glow Mushroom", rarity: "Epic", image: "https://gag.gg/wiki/Glow_MushroomFruit.png" },
        { name: "Pineapple", rarity: "Rare", image: "https://gag.gg/wiki/PineappleFruit.png" },
        { name: "Cactus", rarity: "Rare", image: "https://gag.gg/wiki/CactusFruit.png" },
        { name: "Corn", rarity: "Rare", image: "https://gag.gg/wiki/CornFruit.png" },
        { name: "Bamboo", rarity: "Rare", image: "https://gag.gg/wiki/BambooFruit.png" },
        { name: "Baby Cactus", rarity: "Rare", image: "https://gag.gg/wiki/Baby_CactusFruit.png" },
        { name: "Horned Melon", rarity: "Rare", image: "https://gag.gg/wiki/Horned_MelonFruit.png" },
        { name: "Apple", rarity: "Uncommon", image: "https://gag.gg/wiki/AppleFruit.png" },
        { name: "Tomato", rarity: "Uncommon", image: "https://gag.gg/wiki/TomatoFruit.png" },
        { name: "Tulip", rarity: "Uncommon", image: "https://gag.gg/wiki/TulipFruit.png" },
        { name: "Blueberry", rarity: "Common", image: "https://gag.gg/wiki/BlueberryFruit.png" },
        { name: "Strawberry", rarity: "Common", image: "https://gag.gg/wiki/StrawberryFruit.png" },
        { name: "Carrot", rarity: "Common", image: "https://gag.gg/wiki/CarrotFruit.png" }
    ],
    pet: [
        { name: "Raccoon", rarity: "Super", image: "https://gag.gg/wiki/RaccoonPet.png" },
        { name: "Black Dragon", rarity: "Super", image: "https://gag.gg/wiki/BlackDragon_Pet.png" },
        { name: "Ice Serpent", rarity: "Super", image: "https://gag.gg/wiki/IceSerpent_Pet.png" },
        { name: "Unicorn", rarity: "Mythic", image: "https://gag.gg/wiki/UnicornPet.png" },
        { name: "Golden Dragonfly", rarity: "Mythic", image: "https://gag.gg/wiki/GoldenDragonfly_Pet.png" },
        { name: "Bald Eagle", rarity: "Mythic", image: "https://gag.gg/wiki/BaldEaglePet.png" },
        { name: "Bear", rarity: "Mythic", image: "https://gag.gg/wiki/BearPet.png" },
        { name: "Monkey", rarity: "Mythic", image: "https://gag.gg/wiki/MonkeyPet.png" },
        { name: "Bee", rarity: "Legendary", image: "https://gag.gg/wiki/BeePet.png" },
        { name: "Butterfly", rarity: "Legendary", image: "https://gag.gg/wiki/ButterflyPet.png" },
        { name: "Robin", rarity: "Legendary", image: "https://gag.gg/wiki/RobinPet.png" },
        { name: "Turtle", rarity: "Rare", image: "https://gag.gg/wiki/TurtlePet.png" },
        { name: "Deer", rarity: "Rare", image: "https://gag.gg/wiki/DeerPet.png" },
        { name: "Owl", rarity: "Uncommon", image: "https://gag.gg/wiki/OwlPet.png" },
        { name: "Bunny", rarity: "Common", image: "https://gag.gg/wiki/BunnyPet.png" },
        { name: "Frog", rarity: "Common", image: "https://gag.gg/wiki/FrogPet.png" }
    ],
    gear: [
        { name: "Super Watering Can", rarity: "Super", image: "https://gag.gg/wiki/SuperWateringCan.png" },
        { name: "Super Sprinkler", rarity: "Super", image: "https://gag.gg/wiki/SuperSprinkler.png" },
        { name: "Strawberry Sniper", rarity: "Mythic", image: "https://gag.gg/wiki/strawberrySniper.png" },
        { name: "Player Magnet", rarity: "Mythic", image: "https://gag.gg/wiki/PlayerMagnet.png" },
        { name: "Legendary Sprinkler", rarity: "Legendary", image: "https://gag.gg/wiki/LegendarySprinkler.png" },
        { name: "Wheelbarrow", rarity: "Legendary", image: "https://gag.gg/wiki/Wheelbarrow.png" },
        { name: "Teleporter", rarity: "Legendary", image: "https://gag.gg/wiki/Teleporter.png" },
        { name: "Invisibility Mushroom", rarity: "Legendary", image: "https://gag.gg/wiki/InvisibilityMushroom.png" },
        { name: "Basic Pot", rarity: "Epic", image: "https://gag.gg/wiki/BasicPot.png" },
        { name: "Gnome", rarity: "Epic", image: "https://gag.gg/wiki/Gnome.png" },
        { name: "Flashbang", rarity: "Epic", image: "https://gag.gg/wiki/Flashbang.png" },
        { name: "Supersize Mushroom", rarity: "Epic", image: "https://gag.gg/wiki/SupersizeMushroom.png" },
        { name: "Shrink Mushroom", rarity: "Epic", image: "https://gag.gg/wiki/ShrinkMushroom.png" },
        { name: "Rare Sprinkler", rarity: "Rare", image: "https://gag.gg/wiki/RareSprinkler.png" },
        { name: "Lantern", rarity: "Rare", image: "https://gag.gg/wiki/Lantern.png" },
        { name: "Megaphone", rarity: "Rare", image: "https://gag.gg/wiki/Megaphone.png" },
        { name: "Jump Mushroom", rarity: "Rare", image: "https://gag.gg/wiki/JumpMushroom.png" },
        { name: "Speed Mushroom", rarity: "Rare", image: "https://gag.gg/wiki/SpeedMushroom.png" },
        { name: "Trowel", rarity: "Rare", image: "https://gag.gg/wiki/Trowel.png" },
        { name: "Uncommon Sprinkler", rarity: "Uncommon", image: "https://gag.gg/wiki/UncommonSprinkler.png" },
        { name: "Sign", rarity: "Common", image: "https://gag.gg/wiki/Sign.png" },
        { name: "Common Sprinkler", rarity: "Common", image: "https://gag.gg/wiki/CommonSprinkler.png" },
        { name: "Common Watering Can", rarity: "Common", image: "https://gag.gg/wiki/CommonWateringCan.png" }
    ]
};

function slugify(name) {
    return name.toLowerCase()
        .replace(/'/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

// Gán id "category:slug" cho từng item + build map tra cứu nhanh
const ITEM_LOOKUP = {};
Object.keys(ITEMS_DB).forEach(cat => {
    ITEMS_DB[cat].forEach(item => {
        item.id = `${cat}:${slugify(item.name)}`;
        item.category = cat;
        ITEM_LOOKUP[item.id] = item;
    });
});

// ─── Encode / decode link overlay ───────────────────────────────────────
// selections: [{ id, qty, variant }]  →  base64 JSON [[id, qty, variant], ...]
function encodeShowcase(selections) {
    const arr = selections.map(s => [s.id, s.qty, s.variant || 0]);
    return btoa(unescape(encodeURIComponent(JSON.stringify(arr))));
}

function decodeShowcase(encoded) {
    try {
        const json = decodeURIComponent(escape(atob(encoded)));
        const arr = JSON.parse(json);
        return arr.map(([id, qty, variant]) => ({ id, qty, variant: variant || 0 }));
    } catch (e) {
        return [];
    }
}
