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
  { name: "Vaibhav", role: "Founding manager", discord: "@_vaibhavk", image: "/team/vaibhav.webp" },
  { name: "Megazord", role: "Card Specialist", discord: "@megazord10", image: "/team/megazord.webp" },
  { name: "Nithin", role: "Card Specialist", discord: "@nithin_24", image: "/team/nithin.webp" },
  { name: "Raj", role: "Card Specialist", discord: "@ans18457", image: "/team/raj.webp" },
  { name: "Chill", role: "Card Specialist", discord: "@arsh_chill", image: "/team/chill.webp" },
  { name: "Cipher", role: "Card Specialist", discord: "@arceus2107", image: "/team/cipher.webp" },
]

export const pricingPlans = {
  basic: {
    name: "Basic",
    price: "$0",
    period: "/ forever",
    description: "Try for free",
    features: [
      "Daily & weekly rewards",
      "Basic card collection",
      "Trading & matches",
      "Leaderboard access",
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  pro: {
    name: "Pro",
    price: "$2.99",
    period: "/ month",
    description: "Best value for collectors",
    features: [
      "Everything in Basic",
      "2x daily rewards",
      "Exclusive legendary drops",
      "Faster spawn notifications",
      "Custom profile themes",
      "Priority support",
    ],
    buttonText: "Upgrade to Pro",
    highlighted: true,
    highlightedFeature: "2x daily rewards",
  },
  lifetime: {
    name: "Lifetime",
    price: "$40",
    period: "one-time",
    description: "Pay once, play forever",
    features: [
      "Everything in Pro",
      "Lifetime access",
      "Exclusive lifetime badge",
      "Early feature access",
      "VIP Discord role",
    ],
    buttonText: "Get Lifetime",
    highlighted: false,
    highlightedFeature: "Lifetime access",
  },
}

export const stats = [
  { label: "Crics to Collect", value: 500, suffix: "+", counterClass: "counter-crics" },
  { label: "Active Players", value: 128, suffix: "", counterClass: "counter-players" },
  { label: "Crics Caught", value: 2675, suffix: "", counterClass: "counter-caught" },
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
  { label: "Support", href: "https://discord.gg/2jEZ94uXEh", external: true },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
]

export const discordLinks = {
  invite: "https://discord.gg/2jEZ94uXEh",
  bot: "https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID",
}
