const capitalize = (str) => {
  const brandOverrides = {
    facebook: { domain: "Facebook", textIcon: "FB" },
    youtube: { domain: "YouTube", textIcon: "YT" },
    dribble: { domain: "Dribble", textIcon: "DB" },
    twitch: { domain: "Twitch", textIcon: "TW" },
    github: { domain: "GitHub", textIcon: "GH" },
    netflix: { domain: "Netflix", textIcon: "NF" },
    amazon: { domain: "Amazon", textIcon: "AM" },
    spotify: { domain: "Spotify", textIcon: "SP" },
    tailwindcss: { domain: "Tailwind CSS", textIcon: "TC" },
    openai: { domain: "OpenAI", textIcon: "OA" },
    linkedin: { domain: "LinkedIn", textIcon: "LI" },
    figma: { domain: "Figma", textIcon: "FG" },
    wordpress: { domain: "WordPress", textIcon: "WP" },
    reddit: { domain: "Reddit", textIcon: "RD" },
    pinterest: { domain: "Pinterest", textIcon: "PT" },
    slack: { domain: "Slack", textIcon: "SL" },
    tiktok: { domain: "TikTok", textIcon: "TK" },
    instagram: { domain: "Instagram", textIcon: "IG" },
    twitter: { domain: "Twitter", textIcon: "TW" },
    google: { domain: "Google", textIcon: "GG" },
    microsoft: { domain: "Microsoft", textIcon: "MS" },
    apple: { domain: "Apple", textIcon: "AP" },
  };

  if (brandOverrides[str]) {
    return brandOverrides[str];
  }
  return { domain: str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(), textIcon: str.charAt(0).toUpperCase() + str.charAt(1).toUpperCase() };
};

export default capitalize;
