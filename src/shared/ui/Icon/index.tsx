import img from './assets/test.png'

export function TestIcon ()  {
    return <img src={img} alt="" />
}
export function GreenArrow ()  {
    return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 17L10 5" stroke="#00AC4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M4.16667 9.99999L10 4.16666L15.8333 9.99999" stroke="#00AC4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
}