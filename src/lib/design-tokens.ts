/** SASALLE material identity */
export const sasalle = {
  charcoal: "#0B0D10",
  brickRed: "#7A3A2E",
  terracotta: "#A0523D",
  ivory: "#F5F1EA",
  gold: "#B89B5E",
  smoke: "#A7A7A7",
  hijauNyonya: "#466557",
  clayRoster: "#86736f",
} as const;

/** Curated Unsplash — reliable CDN, luxury boutique aesthetic */
const u = (id: string, w = 1920) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const images = {
  heroLobby: u("photo-1611892440504-42a792e5248b", 2400),
  materialHonesty: u("photo-1600607687939-ce8a6c25118c", 1200),
  quietude: u("photo-1631049307264-eada3a226c0", 1200),
  sanctuary: u("photo-1540555700478-4be289fb82cd", 1920),
  heritageSuite: u("photo-1590490360182-c33d57733427", 1400),
  obsidianStudio: u("photo-1595576504738-8f092fdc1c85", 1400),
  ivoryPavilion: u("photo-1520250497591-112f2f9a3f4a", 1400),
  spaPool: u("photo-1544161515-4ab6ce6db974", 1920),
  diningRoom: u("photo-1517248135467-4c7edcad34c4", 1920),
  staircase: u("photo-1505883887111-139fcc364551", 1400),
  bathroom: u("photo-1620626011761-996317b8d101", 1200),
  exterior: u("photo-1564501049412-61c2a3083791", 1920),
  keyAmbience: u("photo-1600210492490-0946911129ec", 1600),
} as const;

export type ImageKey = keyof typeof images;
