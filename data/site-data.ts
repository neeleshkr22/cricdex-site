export const commands = [
  { cmd: "/crics daily", desc: "Claim your daily reward" },
  { cmd: "/crics weekly", desc: "Claim weekly reward" },
  { cmd: "/crics list", desc: "View your cricketers" },
  { cmd: "/trade begin @user", desc: "Start trading with someone" },
  { cmd: "/stake begin @user", desc: "Stake your players" },
  { cmd: "/match start @user", desc: "Start a cricket match" },
]

export const teamMembers = [
  { name: "YSR", role: "Developer", discord: "@.ysr07", image: "/team/ysr.gif" },
  { name: "Neelesh", role: "Co-Dev & Designer", discord: "@i.neelesh", image: "/team/neelesh.webp" },
  { name: "Vaibhav", role: "Founder", discord: "@_vaibhavk", image: "/team/vaibhav.webp" },
  { name: "Megazord", role: "Card Specialist", discord: "@megazord10", image: "/team/megazord.webp" },
  { name: "Nithin", role: "Card Specialist", discord: "@nithin_24", image: "/team/nithin.webp" },
  { name: "Raj", role: "Card Specialist", discord: "@ans18457", image: "/team/raj.webp" },
  { name: "Chill", role: "Card Specialist", discord: "@arsh_chill", image: "/team/chill.webp" },
  { name: "Cipher", role: "Card Specialist", discord: "@arceus2107", image: "/team/cipher.webp" },
]

export const pricingPlans = {
  premium: {
    name: "Premium (Spawnable)",
    price: "$3.5 / $5.5",
    period: "one-time",
    description: "For players who want to dominate the meta",
    features: [
      "1.0 Rated Custom Card (Spawnable) - $3.5",
      "0.1 Rated Custom Card (Spawnable) - $5.5",
      "Access to Pre-Launched Cards",
      "7 million cricdex coins + any rare card",
      "Captain boost",
      "Access to Premium auto spawns",
      "Exclusive Premium Role",
      "Early Access to Upcoming Features",
    ],
    buttonText: "Get Premium",
    highlighted: true,
  },
  ambassador: {
    name: "Ambassador (Non-Spawnable)",
    price: "$5",
    period: "first purchase, then $4/mo renewal",
    description: "For supporters who want identity and exclusivity",
    features: [
      "1.0 Rated Custom Card (Non-Spawnable / Exclusive)",
      "Monthly Rarity Boost (0.9 -> 0.8 -> 0.7...)",
      "Access to Pre-Launched Cards",
      "Ambassador Role (Special Highlighted Role)",
      "Access to Ambassador auto spawns",
      "Captain and vice captain boost",
      "0.1 of your choice in every renewal + 10mil cricdex coins",
      "10 million cricdex coins + any rare card",
    ],
    buttonText: "Get Ambassador",
    highlighted: false,
    highlightedFeature: "Ambassador Role (Special Highlighted Role)",
  },
  donator: {
    name: "Donator",
    price: "$2",
    period: "/ month",
    description: "Support the project and unlock supporter perks",
    features: [
      "Donator Role",
      "1 special Grade Packs",
      "2 million cricdex coins",
      "Light Pink Name Highlight",
      "Access to Donator Chat",
      "Donator Giveaways",
      "Supporter Showcase Role",
      "Priority Community Updates",
    ],
    buttonText: "Become a Donator",
    highlighted: false,
    highlightedFeature: "Supporter Showcase Role",
  },
}

export const stats = [
  { label: "Crics to Collect", value: 500, suffix: "+", counterClass: "counter-crics" },
  { label: "Active Players", value: 200, suffix: "+", counterClass: "counter-players" },
  { label: "Crics Caught", value: 5000, suffix: "+", counterClass: "counter-caught" },
]

export const features = [
  {
    icon: "Trophy",
    title: "Collect Cricketers",
    shortDesc: "Catch legendary players as they spawn in your Discord channels",
    longDesc: "Build your collection with rare, epic, and legendary tier players from cricket history.",
  },
  {
    icon: "Users",
    title: "Trade System",
    shortDesc: "Exchange players with other collectors in your server",
    longDesc: "Secure trading with bulk add support, trade history, and fair value calculations.",
  },
  {
    icon: "Swords",
    title: "Stake Battles",
    shortDesc: "Winner takes all! Stake your cricketers in epic battles",
    longDesc: "High-risk, high-reward gameplay. Put your best players on the line and claim victory.",
  },
  {
    icon: "Gamepad2",
    title: "Cricket Matches",
    shortDesc: "Build your lineup and compete in simulated matches",
    longDesc: "Pick batsmen, bowlers, all-rounders, and wicketkeepers. Watch your team play!",
  },
]

export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Commands", href: "#commands" },
  { label: "Team", href: "#team" },
  { label: "Premium", href: "#pricing" },
]

export const footerLinks = [
  { label: "Commands", href: "#commands" },
  { label: "Support", href: "https://discord.gg/xrGqpSkuDE", external: true },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
]

export const discordLinks = {
  invite: "https://discord.gg/xrGqpSkuDE",
  bot: "https://top.gg/bot/1209518848513024042",
}
