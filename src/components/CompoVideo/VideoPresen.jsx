import Plyr from "plyr";
export const VideoPresen = () => {
    setTimeout(() => {
            const player = new Plyr('#vdplayer', {
                
            });
            player.source = {
                type: 'video',
                sources: [
                    {
                        src: "http://player.vimeo.com/video/728721225",
                        provider: 'vimeo',
                        size: 720
                    },
                ],
            };
        
    }, 1000)
    return (
        <>
            <video loading="lazy" id="vdplayer"  className='h-100res' style={{width: "100px"}}></video>
        </>
    )
}