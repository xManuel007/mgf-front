import { dadoFeature } from "./dado";
import { lolaFeature } from "./lola";
import { mamaFeature } from "./mama";
import { nidoFeature } from "./nido";
import { papaFeature } from "./papa";
import { solFeature } from "./sol";
import { tioTianFeature } from "./tioTian";
import type { Feature } from "./types";


export const featuresMap: Record<string, Feature> = {
  dado: dadoFeature,
  lola: lolaFeature,
  mama: mamaFeature,
  nido: nidoFeature,
  papa: papaFeature,
  sol: solFeature,
  tioTian: tioTianFeature
}
