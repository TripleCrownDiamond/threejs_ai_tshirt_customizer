import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './digitalprocessnoir.png',
    fullDecal: './digitalprocessnoir.png',

});

export default state;