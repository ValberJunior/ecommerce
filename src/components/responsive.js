import {css} from 'styled-components';


export const tablet = (props)=>{
    return css`
    @media only screen and (min-height: 1024px){
        ${props}
    }
    `
};

export const viewPort = (props)=>{
    return css`
    @media only screen and (max-width: 765px)
    `
}


export const mobile = (props)=>{
    return css`
    @media only screen and (max-width: 420px){
        ${props}
    }
    `
};

export const mobileMini = (props)=>{
    return css`
    @media only screen and (max-width: 320px){
        ${props}
    }
    `
};

