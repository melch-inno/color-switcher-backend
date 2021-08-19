/**
 * interface for rbg
 */
export interface IRGB {
  r: number;
  g: number;
  b: number;
}

/**
 * interface for hsl
 */
export interface IHCL {
  h: number;
  s: number;
  l: number;
}

/**
 * @function RBGColorSwatchGenerate
 * generate random rbg
 */
export async function RBGColorSwatchGenerate(): Promise<IRGB> {
  const r = rand(0, 225);
  const g = rand(0, 225);
  const b = rand(0, 225);
  return { r, g, b };
}

/**
 * @function HSLColorSwatchGenerate
 * generate random hsl
 */
export async function HSLColorSwatchGenerate(): Promise<IHCL> {
  const h = rand(1, 360);
  const s = rand(0, 100);
  const l = rand(0, 100);
  return { h, s, l };
}

/**
 * @function rand
 * @param min
 * @param min
 */
function rand(min: number, max: number) {
  return Math.round(min + Math.random() * (max - min));
}
