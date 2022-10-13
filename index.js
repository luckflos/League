//AD, AP, Health, Mana, HealthRegen, ManaRegen, Armor, MagicResist, CritDmg, MoveSpeed, AttackRange, Other
const graves = [68, 0, 625, 325, 8, 8, 33, 32, 175, 340, 425, 
"basic attacks consume ammunition within 2 shells. He will reload over a few seconds immediately after expending all shells or withholding leftover shells for a while. The reload time is reduced by Graves' level and Attack speed icon.png bonus attack speed, and can be interrupted by declaring an attack or casting an ability."]
const cull = [7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '+3 on hit hp, 1g per minion, +350g @ 100 killed minions'] 
const darkSeal = [0, 15, 40, 0, 0, 0, 0, 0, 0, 0, 0, 'gain 8ap for every kill, 4ap for an assist']
const doransBlade = [8, 0, 80, 0, 0, 0, 0, 0, 0, 0, 0, '+2.5% omniVamp']
const doransRing = [0, 15, 70,0, 0, 0, 0, 0, 0, 0, 0, '+5dmg on-hit to minions, restore 1mana/second, when you dmg an enemy champion, gain 1.5mana/sec mana * 10 seconds when enemy champion damaged, gain hp instead for 45% value if full mana']
const doransShield = [0, 0, 80, 0, 6, 0, 0, 0, 0, 0, 0, '+5dmg on-hit to minions, when hit by an enemy or large monster; gain 0-40 hp regen based off missing health']
const emberKnife = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '+7% omniVamp, Dmg to monsters burns them for (60(+30%AP)(+5% bonus AD)(+2% bonus health)) magic dmg every 5sec., killing large monsters grant 60 bonus exp=; the 1st one granting a total of 210, regenerate 8-18mana based off of missing mana']
const spectralSicle = [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const bfSword = 40
const longSword = 10
const pickaxe = 25
const hexdrinker = 20
const ironSpikeWhip = 25
const lastWhisper = 20
const phage = 15
const serratedDirk = 30
const tiamat = 25
const vampiricScepter = 15
const executionersCalling = 20
const blackCleaver = 45
const blackMistSythe = 20
const bladeOfRuinKing = 40
const bloodthirster = 55
const chempunkChainsaw = 55
const deathsDance = 55
const edgeOfNight = 50
const essenceReaver = 45
const guardianAngel = 45
const hullbreaker = 50
const infinityEdge = [70, 0]
const lordDominicsRegards = 30
const manamune = 35
const mawOfMalmortius = 55
const mecurialScimitar = 40
const mortalReminder = 25
const muramana = 35
const ravenousHydra = [70, 0]
const serpeantsFang = 55
const seryldasGrudge = 45
const silvermoreDawn = 40
const stormrazor = 40
const theCollector = 55 
const titanicHydra = 30
const umbrialGlave = 50
const youmuusGhostblade = 55
const devineSunderer = 40
const duskbladeOfDraktharr = 60
const eclipse = 60
const galeforce = 60
const goredrinker = 55
const immortalShieldbow = 50
const krakenSlayer = 65
const prowlersClaw = 60
const strideBreaker = 50
const trinityForce = 35

const attackDmg = Array[0]
const abilityDmg = Array[1]
const health = Array[2]
const mana = Array[3]
const healthRegen = Array[4]
const manaRegeng = Array[5]
const armor = Array[6]
const magicResist = Array[7] 
const critDmg = Array[8]
const moveSpeed = Array[9]
const attackRange = Array[10]
const other = Array[11]
let greeting




function findDmg() {
    if (mortalReminder <= ravenousHydra.attackDmg){
        greeting = "Run";
    } else {
        greeting = "Fight";
    }
    document.getElementById("demo").innerHTML = greeting;
}
