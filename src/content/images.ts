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
};

const slot = (alt: string, brief: string): ImageSlot => ({
  src: null,
  alt,
  brief,
  credit: null,
  license: null,
  sourceUrl: null,
});

export const images = {
  homeHeroMain: slot(
    "A smiling woman walking on a sunny wooded trail",
    "Woman, natural body type, 30s to 40s, walking outdoors in warm light, relaxed and confident. Portrait orientation."
  ),
  homeHeroSecondary: slot(
    "A smiling man in his fifties resting outdoors",
    "Man, 50s, seated outdoors, warm natural light, easy smile. Portrait orientation."
  ),
  homeApproach: slot(
    "A ceramic mug and notebook on a sunlit table beside a plant",
    "Warm still life: ceramic mug, notebook, green plant, morning light. Landscape."
  ),
  homeCta: slot(
    "A quiet desk with a notebook, pen and coffee mug",
    "Light wood desk corner, notebook and mug, soft window light. Landscape."
  ),
  wmHeroMain: slot(
    "A woman sitting outdoors holding a warm mug",
    "Woman, 40s, natural body type, seated outdoors with a mug, calm and content. Portrait."
  ),
  wmHeroSecondary: slot(
    "A man with a backpack smiling on an outdoor walk",
    "Man, 40s to 60s, deeper skin tone, outdoors with a daypack, friendly. Portrait."
  ),
  wmDetail: slot(
    "A notebook with handwritten notes next to a glass of water",
    "Simple wellness still life: open notebook, pen, glass of water, plant. Landscape."
  ),
  hiwHeroMain: slot(
    "A woman smiling at her laptop in a bright living room",
    "Woman, 30s to 50s, curly hair, joining a video visit from a cozy sofa. Landscape or square."
  ),
  hiwHeroSecondary: slot(
    "An open notebook and pen on a wooden table",
    "Close up of notebook and pen on warm wood. Square."
  ),
  hiwStepBook: slot(
    "A stoneware mug on a table near a bright window",
    "Mug and plants on a table, calm morning light. Landscape."
  ),
  hiwStepMeet: slot(
    "A man smiling while talking on a video call at home",
    "Man, 40s, Asian or Latino, speaking warmly to a laptop at home. Landscape."
  ),
  hiwStepPlan: slot(
    "A spiral notebook and pen beside a potted plant",
    "Notebook with pen, plant, soft shadows. Landscape."
  ),
  hiwOngoing: slot(
    "Two adults sharing a laugh on a sunny walk outdoors",
    "Two adults in their 40s to 50s outdoors among trees, natural and happy. Landscape."
  ),
  providerWorkspace: slot(
    "A light wood desk with a laptop, notebook, pen and ceramic mug in natural light",
    "Warm workspace: light wood desk, closed laptop, notebook and pen, ceramic mug, plant, natural light. Portrait or square."
  ),
  providerVisit: slot(
    "Two adults walking together outdoors on a hillside path",
    "Two adults walking outdoors in golden light, relaxed conversation. Portrait."
  ),
  contactDesk: slot(
    "A tidy desk with a plant and a laptop near a window",
    "Bright desk with plant and laptop, uncluttered. Landscape."
  ),
} satisfies Record<string, ImageSlot>;

export type ImageKey = keyof typeof images;
