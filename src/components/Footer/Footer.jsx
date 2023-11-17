
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import  '../../footer.css'

const Footer = () =>{
    return(
     <div className='footer'>
        <div className='section_1'>
            <div className='footer_links'>
                <span>Terms Of Use</span>
                <span>Privacy-Policy</span>
                <span>FAQ</span>
                <span>Watch List</span>
            </div>
            <div className='paragraph'>
            <p>©2023 WATCHIT. All Right Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, 
            Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.</p>
            </div>
        </div>

        <div className='section_2'>
            <div className='follow'>
                <span>Follow Us:</span>
            </div>
            <div className='icons'>
                <div className='circle'><FacebookOutlinedIcon sx={{width:'2rem', height: '2rem'}}/></div>
                <div className='circle'><TwitterIcon sx={{width:'2rem', height: '2rem'}}/></div>
                <div className='circle'><GoogleIcon sx={{width:'2rem', height: '2rem'}}/></div>
                <div className='circle'><GitHubIcon sx={{width:'2rem', height: '2rem'}}/></div>
            </div>
        </div>

        <div className='section_3'>
            <div className='watch_app'>
                <span>Watchit App</span>
            </div>
            <div className='get_it'>
                <img className='images' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' alt='google play'></img>
                <img className='images' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png' alt='app store'></img>
            </div>
        </div>
     </div>   
    )
};

export default Footer;