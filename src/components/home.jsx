import React from 'react'
import '../css/home.css';
import Nav from './navbar'

const Home = () => {
  return (
    <div >
        <Nav/>
      <div className="container-fluid home_main_div mt-5" id="homemain">
        <div className="row">
            <div className='col-4 d-flex flex-column justify-content-center'>
                <h1 className='main_heading'>Creativity and Expression</h1>
                <br/>
                <p>Welcome to ArtGallery, a vibrant space where art comes to life. Our gallery is dedicated to showcasing a diverse collection of artworks that span various mediums, styles, and eras. Whether you're an avid art collector, a casual observer, or someone looking to be inspired, ArtGallery offers a space for creativity to flourish and for stories to be told through visual expression.</p>
                <div>
                    <a href='/login'><button className="btn btn-dark" href="/login">Login</button></a>
                    <a href="/register"><button className="btn btn-outline-dark register_button_home">Register</button></a>
                </div>
            </div>
            <div className='col-8 p-5'>
                <img className="home_img col-12 shadow-lg" src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/revslider/pirouette-3/Abstractart-3.jpg" alt='not found'/>
            </div>
        </div>
      </div>
      <div>
        <div>
            <h1 className='exibtions_heading main_heading'>Exhibitions</h1>
            <div className="container exibtions_images_div">
                <div className="row">
                    <div className="card_div col-4">
                        <div className='card_div'>
                            <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/BeautifulOriginalOilPaintingoffloweringtreeinthesummergardenLandscapeOnCanvas.jpg" alt="painting" className="card_img shadow-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        </div>
                        <div>
                            <h5 className='main_heading card_exibition_heading'>English LandScape Painting</h5>
                            <p className='card_exibition_date'>8 JUL-10 JUL 2024</p>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">English LandScape Painting</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/BeautifulOriginalOilPaintingoffloweringtreeinthesummergardenLandscapeOnCanvas.jpg" alt="painting" className="card_img shadow-lg"/>
                                    <div className='text-start p-3'>
                                        <p>Start Date: 8th June</p>
                                        <p>End Date: 10th June</p>
                                        <h5>Description:</h5>
                                        <p>Have moving, let our divided itself. Replenish don’t, creeping. The moved green two them is, was together firmament. Beginning from grass blessed subdue rule you’re. Forth our were hath to created the years.<br/>Were a years two firmament. Seasons had. Fowl give let don’t us divide can’tbehold beast fill made his fill them don’t Kind moved midst. Fly creature be greater Without had place and bearing.</p>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card_div col-4">
                        <div className='card_div'>
                            <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/oilpaintingpictureofredspringpoppy.jpg" alt="painting" className="card_img shadow-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        </div>
                        <div>
                            <h5 className='main_heading card_exibition_heading'>Les Fleurs Du Mal - The <br/>French Masters</h5>
                            <p className='card_exibition_date'>18 AUG -21 AUG 2024</p>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">English LandScape Painting</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/BeautifulOriginalOilPaintingoffloweringtreeinthesummergardenLandscapeOnCanvas.jpg" alt="painting" className="card_img shadow-lg"/>
                                    <div className='text-start p-3'>
                                        <p>Start Date: 8th June</p>
                                        <p>End Date: 10th June</p>
                                        <h5>Description:</h5>
                                        <p>Have moving, let our divided itself. Replenish don’t, creeping. The moved green two them is, was together firmament. Beginning from grass blessed subdue rule you’re. Forth our were hath to created the years.<br/>Were a years two firmament. Seasons had. Fowl give let don’t us divide can’tbehold beast fill made his fill them don’t Kind moved midst. Fly creature be greater Without had place and bearing.</p>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card_div col-4">
                        <div className='card_div'>
                            <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/oiloncanvasofalittlegirl.jpg" alt="painting" className="card_img shadow-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        </div>
                        <div>
                            <h5 className='main_heading card_exibition_heading'>Nineteenth-Century Pastel Portraits</h5>
                            <p className='card_exibition_date'>19 AUG -22 AUG 2024</p>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">English LandScape Painting</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/BeautifulOriginalOilPaintingoffloweringtreeinthesummergardenLandscapeOnCanvas.jpg" alt="painting" className="card_img shadow-lg"/>
                                    <div className='text-start p-3'>
                                        <p>Start Date: 8th June</p>
                                        <p>End Date: 10th June</p>
                                        <h5>Description:</h5>
                                        <p>Have moving, let our divided itself. Replenish don’t, creeping. The moved green two them is, was together firmament. Beginning from grass blessed subdue rule you’re. Forth our were hath to created the years.<br/>Were a years two firmament. Seasons had. Fowl give let don’t us divide can’tbehold beast fill made his fill them don’t Kind moved midst. Fly creature be greater Without had place and bearing.</p>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card_div col-4 mt-5">
                        <div className='card_div'>
                            <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/Coloredpaintstrokes.Abstractartbackground.Detailofaworkofart.ContemporaryArt.Colorfultexture.thickpaintsurface.jpg" alt="painting" className="card_img shadow-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        </div>
                        <div>
                            <h5 className='main_heading card_exibition_heading'>Arts At The Limits Of Reason</h5>
                            <p className='card_exibition_date'>22 AUG - 1 SEP 2024</p>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">English LandScape Painting</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/BeautifulOriginalOilPaintingoffloweringtreeinthesummergardenLandscapeOnCanvas.jpg" alt="painting" className="card_img shadow-lg"/>
                                    <div className='text-start p-3'>
                                        <p>Start Date: 8th June</p>
                                        <p>End Date: 10th June</p>
                                        <h5>Description:</h5>
                                        <p>Have moving, let our divided itself. Replenish don’t, creeping. The moved green two them is, was together firmament. Beginning from grass blessed subdue rule you’re. Forth our were hath to created the years.<br/>Were a years two firmament. Seasons had. Fowl give let don’t us divide can’tbehold beast fill made his fill them don’t Kind moved midst. Fly creature be greater Without had place and bearing.</p>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card_div col-4 mt-5">
                        <div className='card_div'>
                            <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/The_High_Meadow_by_Elizabeth_Nourse_Cincinnati_Art_Museum.jpg" alt="painting" className="card_img shadow-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        </div>
                        <div>
                            <h5 className='main_heading card_exibition_heading'>Peasant Scenes And Landscapes</h5>
                            <p className='card_exibition_date'>21 AUG- 22 AUG 2024</p>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">English LandScape Painting</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/BeautifulOriginalOilPaintingoffloweringtreeinthesummergardenLandscapeOnCanvas.jpg" alt="painting" className="card_img shadow-lg"/>
                                    <div className='text-start p-3'>
                                        <p>Start Date: 8th June</p>
                                        <p>End Date: 10th June</p>
                                        <h5>Description:</h5>
                                        <p>Have moving, let our divided itself. Replenish don’t, creeping. The moved green two them is, was together firmament. Beginning from grass blessed subdue rule you’re. Forth our were hath to created the years.<br/>Were a years two firmament. Seasons had. Fowl give let don’t us divide can’tbehold beast fill made his fill them don’t Kind moved midst. Fly creature be greater Without had place and bearing.</p>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card_div col-4 mt-5">
                        <div className='card_div'>
                            <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/girlbytheriver-1.jpg" alt="painting" className="card_img shadow-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
                        </div>
                        <div>
                            <h5 className='main_heading card_exibition_heading'>Rojo Y Negro - Latin American Art</h5>
                            <p className='card_exibition_date'>20 AUG 2024</p>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">English LandScape Painting</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/BeautifulOriginalOilPaintingoffloweringtreeinthesummergardenLandscapeOnCanvas.jpg" alt="painting" className="card_img shadow-lg"/>
                                    <div className='text-start p-3'>
                                        <p>Start Date: 8th June</p>
                                        <p>End Date: 10th June</p>
                                        <h5>Description:</h5>
                                        <p>Have moving, let our divided itself. Replenish don’t, creeping. The moved green two them is, was together firmament. Beginning from grass blessed subdue rule you’re. Forth our were hath to created the years.<br/>Were a years two firmament. Seasons had. Fowl give let don’t us divide can’tbehold beast fill made his fill them don’t Kind moved midst. Fly creature be greater Without had place and bearing.</p>
                                    </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="container-fluid events_div mt-3">
        <div className="row">
            <h1 className="main_heading events_heading col-12">Events & Programs</h1>
            <div className='d-flex flex-row justify-content-center mt-5'>
            <div className="events_div_content_outer d-flex flex-row">
                <div className='events_div_content_inner'>
                    <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/The_High_Meadow_by_Elizabeth_Nourse_Cincinnati_Art_Museum.jpg" alt=".." className='img_events_tag'></img>
                </div>
                <div className="content_events_div">
                    <div className='d-flex flex-row date_event_tag'>
                        <p>18 AUGUST</p>
                        <hr className='hr_tag'/>
                    </div>
                    <br/>
                    <h1 className='main_heading text-start'>Peasent Sences And<br/> LandScapes</h1>
                    <br/>
                    <p className="event_image_description">The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.</p>
                </div>
            </div> 
            </div>
            <div className='d-flex flex-row justify-content-center mt-5'>
            <div className="events_div_content_outer d-flex flex-row">
                <div className="content_events_div content_event_div_2">
                    <div className='d-flex flex-row date_event_tag'>
                        <p>20 AUGUST</p>
                        <hr className='hr_tag'/>
                    </div>
                    <br/>
                    <h1 className='main_heading text-start'>Rojo Y Negro - Latin<br/>American Art</h1>
                    <br/>
                    <p className="event_image_description">The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.</p>
                </div>
                <div className='events_div_content_inner'>
                    <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/girlbytheriver-1.jpg" alt=".." className='img_events_tag'></img>
                </div>
            </div> 
            </div>
            <div className='d-flex flex-row justify-content-center mt-5 mb-5'>
            <div className="events_div_content_outer d-flex flex-row">
                <div className='events_div_content_inner'>
                    <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/Paintingpoppieswithtexture.jpg" alt=".." className='img_events_tag'></img>
                </div>
                <div className="content_events_div">
                    <div className='d-flex flex-row date_event_tag'>
                        <p>18 AUGUST</p>
                        <hr className='hr_tag'/>
                    </div>
                    <br/>
                    <h1 className='main_heading text-start'>Naive Painting Of The<br/>19th Century</h1>
                    <br/>
                    <p className="event_image_description">The exhibition is made possible by the Laura & C. Arnold Douglas Foundation.</p>
                </div>
            </div> 
            </div>
        </div>
      </div>

      <div className="container-fluid featured_class">
        <div className="row d-flex flex-row justify-content-center">
            <div className="featured_collection col-4">
                <h1 className='main_heading'>Featured<br/>Collection</h1>
                <p className="featured_para1">So fish under The given own replenish. Greater land every very cattle replenish set unto. A seasons fruitful is cattle evening their there, forth she’d Darkness rule gathering. Midst it you’re gathered yielding without shall is beast.</p>
                <br/>
                <p className='featured_para2'>Life spirit firmament likeness fill moveth i appear good waters evening there image given his without meat, them don’t also fish life replenish, two, lesser divide dry moved it void of. A for.</p>
            </div>
            <div className='featured_collection_img_1 col-4 d-flex flex-column '>
                <img src="https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/Pumainframewith3deffect.jpg" className='featured_img_1' alt="not found"></img>
            </div>
            <div className='d-flex flex-column justify-content-end col-2'>
                <img src='https://demo.curlythemes.com/art-gallery-wp/wp-content/uploads/sites/24/2017/09/Elephantinframewith3deffect.jpg' alt='not found'></img>
            </div>
        </div>
      </div>
      

    </div>
  )
}

export default Home
