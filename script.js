import { games } from './scripts/db.js';

for (let index = 0; index < games.length; index++) {
    document.getElementById("game-gallery").innerHTML += `
                    <div class="single-game-cover">
                    <div id="name-container" class="item-container">
                        <h2>Name</h2>
                    </div>

                    <div id="game-image-container" class="item-container">
                        <img class="game-image game-content-distance" src="img/Tohru.png" alt="">
                    </div>

                    <div id="game-infos" class="item-container">
                        <div id="valued-infos">
                            <h2 class="game-content-distance">Preis</h2>
                            <div id="like-container" class="game-content-distance">
                                likecount
                                <button class="like-button"></button>
                            </div>
                        </div>
                        <table class="game-content-distance">
                            <tr>
                                <td>dev</td>
                                <td>: blastud</td>
                            </tr>
                            <tr>
                                <td>Erscheinungsjahr</td>
                                <td>: 1111</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>: fantasy</td>
                            </tr>
                        </table>
                    </div>

                    <h2>Kommentare</h2>
                    <div id="comment-box">
                        <div id="comment-container">
                            <div id="comment-author">jo</div>
                            <div id="comment">jup</div>
                        </div>
                        <div id="comment-container">
                            <div id="comment-author">jo</div>
                            <div id="comment">jup</div>
                        </div>
                        <div id="comment-container">
                            <div id="comment-author">jo</div>
                            <div id="comment">jup</div>
                        </div>
                        <div id="comment-container">
                            <div id="comment-author">jo</div>
                            <div id="comment">jup</div>
                        </div>
                        <div id="comment-container">
                            <div id="comment-author">jo</div>
                            <div id="comment">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam eos explicabo repudiandae laudantium quo? Quas, odio ea maxime, culpa, alias sed ab sapiente dicta doloribus ad error ducimus iste neque.</div>
                        </div>
                    </div>
                    
                </div>
    `

}