import { IconType } from 'react-icons';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

type Social = {
    title: string;
    icon: IconType;
    url: string;
};

export const SocialData: Social[] = [
    {
        title: "facebook",
        icon: FaFacebookF,
        url: "/"
    },
    {
        title: "instagram",
        icon: FaInstagram,
        url: "/"
    },
    {
        title: "youtube",
        icon: FaYoutube,
        url: "/"
    },
]