export const HandlerImageSrc = (image: string) => {
    const imageReplaced = image.replace(/\[|\]/g, '').replace(/"/g, '')
    
    const regex = /^https:\/\/.*/;

    if(regex.test(imageReplaced)){
        return  imageReplaced;
    }

    return 'nofoto.png';

}