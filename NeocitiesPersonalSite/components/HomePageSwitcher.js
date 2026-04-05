infobox = document.getElementById("central-info-box");


function SwapToMain() {
    infobox.innerHTML =
        `
        <img src="images/stardust-pfp.png" style="float:right; min-width:15%; max-width:35%;" title="This is me. I'm Dusty :)"
                         alt="(An image of a black, white and teal dragon with a fluffy mane)">

                    <h1 style="font-size:29px;" >Welcome to the den!</h1>
                    <p>
                        You've reached my humble abode for all my stuff! At least, most of it. (Maybe I've got too much stuff. :p) I go by plenty of names,
                        most commonly SquidInkarus, but you can call me by my sona name, Stardust, too!
                        <br />
                        I'm many things... a fluffy space dragon, video game developer and enjoyer, digital artist and frequent doodler, a programmer,
                        newbie 3D all-round artist, crocheter, wannabe Youtuber, fandom lurker, Lego Movie fanatic, lover of reptiles, and collector of all
                        sorts of silly toys and trinkets and things... the list goes on and on and on! If you're also a nerd we'll probably get along great xD
                        <br /><br />
                        This site is partly an exercise in webdev, but partly also a project I just think is neat. Old funky websites are cool! <br />
                        While you're here, why not check out my other stuff? My art and things are here too! (Or at least I'm in the process of adding it!)
                    </p>
        `;
}


function SwapToSitemap() {
    infobox.innerHTML =
        `

    <h1>Where to go?</h1>

    <h3>Homepage</h3>
    <p>
        Oh hey, you're here now! This page is the main hub for all the things you generally find on personal / indie sites now. I hope
        each little segment on this page is relatively easy to pick up on! Note that this site is still a work in progress so any sections
        or their location may be subject to change.
    </p>
    <br />

    <h5>Landing</h5>
    <p>
        This is probably what you... <i>landed</i> on when you first visited my site. It's a little blurb about me and the site! You
        could say it's an... about me? :p
    </p>
    <br />

    <h5>Sitemap</h5>
    <p>
        A reference guide for all other sections on the site, in case you're lost or not sure what something's about. Come back over here
        if you feel lost!
    </p>
    <br />

    <h5>Contacts</h5>
    <p>
        A directory of the other places you can stalk me on the internet! ...don't actually stalk me lol. But feel free to say hi
        and get to know me! I love making friends :3
    </p>
    <br />

    <h5>Links / Resources</h5>
    <p>For the variety of cool stuff I'd like to refer you to, but couldn't find another place to fit in...</p>
    <br />

    <h5>Beloved Things</h5>
    <p>Just my spot to yap about particular things I love! I guess it's an all-in-one shrine, if you wanna call it that?</p>
    <br />

    <h5>Q&A</h5>
    <p>
        For all the questions I've been frequently asked! If you're wondering something, you might be able to find the answer here.
        If not, feel free to message me about it!
    </p>
    <br />
    <br />


    <h3>Art</h3>
    <p>
        I'm a rather prolific artist if I do say so myself. (Or I at least hope so. ^^") This is where you'll be able to find most of it! And by most of it,
        I mean all the stuff that I've remembered, found, and felt wasn't too out of date. I can't promise this'll always stay in date, though.
    </p>
    <br />

    <h5>Drawings</h5>
    <p>This is the main thing I do with my time, besides code and games as a whole! The other tabs are really just hobbies, for the most part.</p>
    <br />

    <h5>Crochet</h5>
    <p>Find my finished amigurumi and other crochet projects here!</p>
    <br />

    <h5>3D / Blender</h5>
    <p>Here's any of the digital 3D things I've worked on! For now, I only use Blender, but hey, who knows if that'll change?</p>
    <br />

    <h5>Other Stuff</h5>
    <p>Any creative craft based things I do or have done that don't fit into the above, like sewing, sculpting, etc.</p>
    <br />

    <h5>Games</h5>
    <p>Smaller game projects and game jams that I've contributed to in one way or another.</p>
    <br />

    <h5>Comms / Fanart</h5>
    <p>All the art that I've recived that was made for me, whether commissions I requested or general gift art I've gotten!</p>
    <br />
    <br />


    <h3>Stuff Collections</h3>
    <p>A visual database of all the items I've collected over the years! I've got quite a range of things I collect, so they're split into more granular categories, too.</p>
    <br />

    <h5>Games</h5>
    <p>Covers games, consoles, and peripherals - Playstation 1 through 5, Nintendo stuff from Gamecube and GBA to Switch
    (with sprinkles of other things), and some bonus stuff.</p>
    <br />

    <h5>Other Media</h5>
    <p>Movies, shows, music CDs, and anything else I find cool enough to cover.</p>
    <br />

    <h5>Plushies</h5>
    <p>It's my plushies! The ones that were important enough to feature here, at least.</p>
    <br />

    <h5>Figures</h5>
    <p>All my varieties of figure collections - Skylanders, other Toys-To-Life, figma, sofubi and art toys, various blind box series, etc.</p>
    <br />

    <h5>Lego</h5>
    <p>A page dedicated to my Lego, cause I'm that kinda person. :p</p>
    <br />

    <h5>Other Stuff</h5>
    <p>Anything I want to feature that doesn't really fit in any of the above!</p>
    <br />
    <br />


    <h3>Commissions</h3>
    <p>
        Where you can commission art from me! I'm working on making this an in-site page, but for now it's just the carrd that I built for my commissions and contact info.
    </p>
    `
    ;
}

function SwapToUpdateBlog() {
    infobox.innerHTML = `
    
    `;
}

function SwapToContacts() {
    infobox.innerHTML = `

    <h1>Find me elsewhere!</h1>
    <p>These are mainly sorted by how active I am, from "I at least check here nearly every day" to "I mean to be here more often but never am". This is
    partly a reference for me, too!</p>
    <br/>
    <div style="display:flex; justify-content:space-evenly; align-items:center; flex-wrap: wrap; gep:10%;">

        <p><a href="https://cara.app/squidinkarus">Cara</a></p>
        <p><a href="">YouTube</a></p>
        <p><a href="https://www.furaffinity.net/user/squidinkarus">FurAffinity</a></p>
        <p><a href="https://artfight.net/~SquidInkarus">ArtFight</a></p>
        <p><a href="https://ko-fi.com/charios">Ko-fi</a></p>
        <p><a href="https://www.tumblr.com/funky-space-dragon">Tumblr</a></p>
    </div>
    `;
}
function SwapToResources() {
    infobox.innerHTML = `
    <h1>Cool Stuff</h1>
    <p>I'll probably sort this into sections if I collate enough stuff to warrant that, but for now here are some things I've made / found that you might wanna use!</p>
    <br/>

    <h2>Links</h2>
    <br/>
    <p><a href="https://zadzmo.org/code/nepenthes/">Nepenthes</a> - a digital tarpit to trap AI data-scraping webcrawlers in. Read the full site before using!

    <h2 style="padding-top:4%;">PNGs, GIFs and More</h2>
    <br/>

    <h3>Made By Me</h3>
    <br/>

    <div style="display:flex; justify-content:space-evenly; align-items:center; flex-wrap: wrap;">

        <div style="display:flex; flex-direction:column; justify-content:center; align-items:center; padding-bottom:4% 0%;">
            <h4>Crystal Border<h4>
            <img src="images/crystal-border-doublesize.png"/>
        </div>

        <div style="display:flex; flex-direction:column; justify-content:center; align-items:center;">

            <h4>Starfy Cursor<h4>
            <div style="display:flex; justify-content:space-evenly; align-items:center;">
                <img src="images/UI/Starfy1.png"/>
                <img src="images/UI/Starfy2.png"/>
            </div>
            <p><a href="https://www.starfywiki.org/wiki/Starfy">Source</a></p>
        </div>

    </div>

    <h3>Collected Items</h3>
    <br/>

    
    <div style="display:flex; justify-content:space-evenly; align-items:center; flex-wrap: wrap; padding-bottom:4% 0%;">

        <div style="display:flex; flex-direction:column; justify-content:center; align-items:center;">
            <h4>Lego Spacer</h4>
            <img src="images/lego-pastel-webspacer.gif"/>
            <p>Source unknown :(</p>
        </div>

        <div style="display:flex; flex-direction:column; justify-content:center; align-items:center;">
            <h4>Baby Pokemon Spacer</h4>
            <img src="images/cleffa-igglybuff-togepi.gif" style="width:80px;"/>
            <p><a href="https://www.tumblr.com/petalade/650471108864360448?source=share">Source</a></p>
        </div>

    </div>

    
    `;
}


function SwapToQandA() {
    infobox.innerHTML = `


    <h1>You asked?</h1>

    <h4>"What species is your sona supposed to be?"</h4>
    <p>
        You can read about this more in the character section {LINK}, but Stardust is an astragon! It's my OC species that, to boil it down, is spacefaring magic dragons. And
        they're floofy!
    </p>
    <br />
    <h4>"Can I make my own astragon? / Can I draw your OCs?"</h4>
    <p>
        Yes, absolutely!! I'd be so estatic if you did! I won't claim "dragon with mane" is the most unique thing in the world, but I don't care for the concept of
        closed species, so please feel free to make an astragon of your own. Any and all fanart of my characters makes my day! If you're comfy with it I'd love to even feature
        what you make in my fanart section! Just try to keep it relatively clean if you'd like me to put it there (I'm not gonna demand no nsfw of anything I make bc I know that's
        outta my hands if I put it on the internet lol)
    </p>
    <br />
    <h4>"Can you draw / make..."</h4>
    <p>
        I'm an adult so my time is really important to me, so I'm sorry I can't do free art requests. I'm really grateful you appreciate my art though! I do sometimes do art
        trades... but mostly on Art Fight! <br/>
        If you're asking about commissions, I can try to make you most anything! You should check the commission tab for that though. If your request is a little unique or
        you aren't really sure where your request would fall, please reach out to me! If you're as shy as I am promise I don't bite, I'm happy to talk :)
    </p>
    <br />
    <h4>"Can I use (asset from your site)?"</h4>
    <p>
        Sure! I'd appreciate if you could credit me but I don't expect you to have a list of credits for your blinkies :p Please don't use my characters or art of them without credit
        though, cause that'd be mean!
    </p>
    <h4>"Why is your site's cursor Starfy? / Who's the little guy in your cursor?"</h4>
    <p>
        That's Starfy, the main character from "The Legendary Starfy", a relatively obscure, early 2000s second-party Nintendo game series. (He got 5 games and only the last ever
        left Japan.) Cute lil' guy, isn't he? I'm not the world's biggest Starfy fan, so far I've only played the first, but for some reason I've had a passive interest in the
        man (star?) himself for a while. Probably because he looks like an adorable star, and I love stars! That's why he's a perfect thematic fit for my site. His key art fits
        the most common states of a cursor so well that I just had to. Plus, I've had this running inside joke with myself involving the idea that my OCs would nickname me
        Starfy because it's a cute way to shorten Stardust. :p
    </p>
    `;
}

function DoBounceAnim(bouncingCharacter, sfxFilename) {
    bouncingCharacter.classList.remove("critter-bounce"); /* remove finished css anim if it's there */

    let soundEffect = new Audio(sfxFilename);

    /* checking the with of the item forces reflow, where the page is forced to visually update this element 
    (now that we've removed the animating style class that's what we wanted). Then we can set the class to the animation again */
    void bouncingCharacter.offsetWidth; 
    bouncingCharacter.classList.add("critter-bounce"); 

    soundEffect.play();
    soundEffect.currentTime = 0; /* reset so that we can immediately replay sound, if user is spam clicking the image */
}
