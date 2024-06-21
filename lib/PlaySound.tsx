export default function playSound(url: any) {
    const audio = new Audio(url);
    audio.play();
}
