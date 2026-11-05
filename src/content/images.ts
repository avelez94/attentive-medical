/**
 * Image manifest.
 *
 * Every photograph on the site is a named slot so each image is used once
 * and its license is recorded next to it. Until a licensed photo is placed
 * in /public/images and `src` is set, the slot renders a soft, clearly
 * marked placeholder.
 *
 * To add a photo:
 *   1. Export a web sized JPEG or WebP (about 1600px on the long edge).
 *   2. Save it as /public/images/<slot id>.jpg
 *   3. Set `src`, `credit`, `license` and `sourceUrl` below.
 *
 * Illustrative people must never be presented as real patients, staff or
 * as Dr. Crawford.
 */

export type ImageSlot = {
  src: string | null;
  alt: string;
  /** Art direction for whoever sources the photo. */
  brief: string;
  credit: string | null;
  license: string | null;
  sourceUrl: string | null;
  /** CSS object-position used when the photo is cropped to fit. */
  position?: string;
  /** True for temporary review photos that must be replaced or confirmed before launch. */
  temporary?: boolean;
};

/** An empty slot that shows a placeholder until a licensed photo is added. */
export const slot = (alt: string, brief: string): ImageSlot => ({
  src: null,
  alt,
  brief,
  credit: null,
  license: null,
  sourceUrl: null,
});

/** A temporary Unsplash photo, downloaded to /public/images/<key>.jpg. */
const unsplash = (key: string, photoId: string, alt: string, brief: string, position = "center"): ImageSlot => ({
  src: `/images/${key}.jpg`,
  alt,
  brief,
  credit: "Unsplash photographer (confirm on the photo page)",
  license: "Unsplash License",
  sourceUrl: `https://images.unsplash.com/photo-${photoId}`,
  position,
  temporary: true,
});

export const images = {
  homeHeroMain: unsplash(
    "homeHeroMain",
    "1573497491765-dccce02b29df",
    "A smiling woman with natural hair in a patterned top",
    "Woman, natural body type, 30s to 40s, walking outdoors in warm light, relaxed and confident. Portrait orientation.",
    "center 20%"
  ),
  homeHeroSecondary: unsplash(
    "homeHeroSecondary",
    "1522529599102-193c0d76b5b6",
    "A smiling man with a beard outdoors on a sunny day",
    "Man, 50s, seated outdoors, warm natural light, easy smile. Portrait orientation.",
    "center"
  ),
  homeApproach: unsplash(
    "homeApproach",
    "1490645935967-10de6ba17061",
    "A colorful bowl of vegetables, eggs and greens on a wooden table",
    "Warm still life: ceramic mug, notebook, green plant, morning light. Landscape.",
    "center"
  ),
  homeCta: unsplash(
    "homeCta",
    "1587614382346-4ec70e388b28",
    "A laptop, notebook and reading glasses on a round table",
    "Light wood desk corner, notebook and mug, soft window light. Landscape.",
    "center"
  ),
  wmHeroMain: unsplash(
    "wmHeroMain",
    "1531123897727-8f129e1688ce",
    "A woman with short natural hair in a patterned top against a warm brown wall",
    "Woman, 40s, natural body type, seated outdoors with a mug, calm and content. Portrait.",
    "center 30%"
  ),
  wmHeroSecondary: unsplash(
    "wmHeroSecondary",
    "1566492031773-4f4e44671857",
    "A thoughtful man in glasses resting his chin on his hand",
    "Man, 40s to 60s, deeper skin tone, outdoors with a daypack, friendly. Portrait.",
    "center 25%"
  ),
  wmDetail: unsplash(
    "wmDetail",
    "1584982751601-97dcc096659c",
    "A stethoscope resting on a white surface",
    "Simple wellness still life: open notebook, pen, glass of water, plant. Landscape.",
    "center"
  ),
  hiwHeroMain: unsplash(
    "hiwHeroMain",
    "1611432579699-484f7990b127",
    "A smiling woman in a bright room",
    "Woman, 30s to 50s, curly hair, joining a video visit from a cozy sofa. Landscape or square.",
    "center 30%"
  ),
  hiwHeroSecondary: unsplash(
    "hiwHeroSecondary",
    "1505751172876-fa1923c5c528",
    "A stethoscope on a soft white surface",
    "Close up of notebook and pen on warm wood. Square.",
    "center"
  ),
  hiwStepBook: unsplash(
    "hiwStepBook",
    "1493934558415-9d19f0b2b4d2",
    "A simple desk with a computer, a plant and a wall calendar",
    "Mug and plants on a table, calm morning light. Landscape.",
    "center"
  ),
  hiwStepMeet: unsplash(
    "hiwStepMeet",
    "1576091160399-112ba8d25d1d",
    "A clinician in a white coat with a stethoscope using a smartphone",
    "Man, 40s, Asian or Latino, speaking warmly to a laptop at home. Landscape.",
    "center 40%"
  ),
  hiwStepPlan: unsplash(
    "hiwStepPlan",
    "1547592180-85f173990554",
    "A balanced plate of grains, vegetables and greens",
    "Notebook with pen, plant, soft shadows. Landscape.",
    "center"
  ),
  hiwOngoing: unsplash(
    "hiwOngoing",
    "1573496546038-82f9c39f6365",
    "Two women talking together by a bright window",
    "Two adults in their 40s to 50s outdoors among trees, natural and happy. Landscape.",
    "center"
  ),
  providerWorkspace: unsplash(
    "providerWorkspace",
    "1497032628192-86f99bcd76bc",
    "A desk with a laptop, notebook, pens and a cup of coffee",
    "Warm workspace: light wood desk, closed laptop, notebook and pen, ceramic mug, plant, natural light. Portrait or square.",
    "center"
  ),
  providerVisit: unsplash(
    "providerVisit",
    "1573497620166-aef748c8c792",
    "A smiling woman seated at a table",
    "Two adults walking outdoors in golden light, relaxed conversation. Portrait.",
    "center 35%"
  ),
  contactDesk: unsplash(
    "contactDesk",
    "1638202993928-7267aad84c31",
    "A clinician in a white coat holding a stethoscope",
    "Bright desk with plant and laptop, uncluttered. Landscape.",
    "center"
  ),
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;
