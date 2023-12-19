import { GuithubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedinIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"

export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/danton.ferrari/">
                <InstaIcon/>
            </a>
            <a href="www.linkedin.com/in/danton-gabriel-ferrari-25859621b">
                <LinkedinIcon/>
            </a>
            <a href="https://github.com/danton-ferrari">
                <GuithubIcon/>
            </a>
            <a href="https://twitter.com/g_danton7431">
                <TwitterIcon/>
            </a>
        </div>
    )
}