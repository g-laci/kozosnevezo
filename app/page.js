"use client";

import { InfiniteMovingCards } from "@/app/components/infinite-moving-cards";

const testimonials = [
    {
        quote: "Bár kicsit izgultam az utazás előtt, hogy minden rendben fog-e menni, de végül hatalmas élmény volt ez az egy hét Lengyelországban: a szervezők is nagyon segítőkészek voltak, és egy nagyon jó csapatot ismertem meg, mind Magyarországról, mind a külföldi országokból.",
        name: "Réka",
        image: "hunyadi_reka.jpg",
    },
    {
        quote:
            "Az Erasmus+ számomra életre szóló barátságokat, felejthetetlen élményeket és rengeteg önbizalmat adott. Az első projekt előtt féltem kilépni a komfortzónámból, de ma már biztosan mondhatom, hogy életem egyik legjobb döntése volt.",
        name: "Erhard",
        image: "szabo_erhard.jpg",
    },
    {
        quote: "Sosem gondoltam volna, hogy tíz nap ennyire meg tud változtatni. Annyi különböző gondolkodású és szemléletű emberrel találkozhattam. Olyan emlékeket szereztem, amelyeket soha nem fogok elfelejteni, és olyan tapasztalatokat, amelyek később még hasznosak lehetnek az életem során.",
        name: "Geri",
        image: "sebestyen_gergo.jpg",
    },
    {
        quote: "Eddig 3 erasmuson voltam és ez még a kezdet mivel annyira sok élményt és emléket szereztem mindegyiken. Megtanultam hogy nem szabad elfojtani az ötleteidet csak mert valaki azt hiszi hogy ő a vezér a csapatban. Megtudtam hogy én milyen részt veszek a csoportmunkákban.",
        name: "Dorka",
        image: "horvath_dorina.jpg",
    },
    {
        quote: "Szerintem az Erasmus+ egy kihagyhatatlan elmeny! Mindenkinek tudom ajanlani, ilyen jo tarsasagban es ilyen jo elmenyeket, emlekeket keves helyen szerez az ember. Halas vagyok a lehetosegert, eletre szolo kapcsolatokat es tapasztalatokat adott nekem amelyeket sosem felejtek el, valamint olyan temakrol tanulhattam es oly modon amit iskolaban nem talalsz.",
        name: "Lili",
        image: "horvath_lili.jpg",
    },
    {
        quote: "Nagyon sokat adott az Erasmus+, főleg azt, hogy egy ilyen vegyes csapatban ismerhettem meg embereket. A legjobb része az volt, amikor esténként leültünk billiárdozni, és közben nagyon jól szórakoztunk. Ezekből a random beszélgetésekből lettek a legjobb barátságok. Van, akivel azóta is tartom a kapcsolatot, és ez a legnagyobb nyereség szerintem.",
        name: "Viki",
        image: "viki.jpg"
    },
    {
        quote: "Amióta Erasmus+ projektekre járok, teljesen más szemmel nézem a világot. Rengeteg barátot szereztem, és felejthetetlen élményekkel gazdagodtam, amikért nagyon hálás vagyok. Most már tudom, milyen érzés egy jó közösséghez tartozni. Sőt, ha egy dolgot újraélhetnék az életemből, az az első Erasmus+ cserém lenne!",
        name: "Dorina",
        image: "perger_dorina.jpg"
    },
    {
        quote: "Az erasmus+ számomra olyan felejthetetlen élményt adott, ami által nem csak nemzetközi és hazai barátságokra tehettem szert, hanem számos, remek, új dolgokra is. Kiváló lehetőséget adott a nyelvtanulásra, az izgalmas workshopok által pedig játékosan tanultunk különböző témákról amiket úgy gondolom, hogy a mindennapokban is hasznosítani tudunk.",
        name: "Fanni",
        image: "mikes_fanni.jpg"
    },
    {
        quote: "Az első pár napon figyeltünk a workshopokon, de felmerült a kérdés bennünk, mi lenne, ha mi is tartanánk egyet. Elmondtuk a tervünket, amit mindenki lelkesen fogadott, így tapasztalat nélkül is megtarthattuk az első saját workshopunkat. Régen nevettem ennyit egy óra alatt.",
        name: "Dávid",
        image: "franczel_david.jpg"
    },
    {
        quote: "Az Erasmus+ nagyon sok élményt, tapasztalatot, emlékeket adott számomra. Nagyon tetszett a játékos tanulás amin keresztül sokat javult és fejlődött az angol beszédképességem emellett bele tudtam látni más országok kultúrájába és ismerkedni, barátokat szerezni külföldről valamint eljutottam a tengerpartra életemben ez volt az első, hogy sós vízben legyek!",
        name: "Andris",
        image: "farago_andris.jpg"
    },
    {
        quote: "A lengyelországi Erasmus+ program egy életre szóló élményt adott, amely során új barátokat szereztem és különböző kultúrákat ismerhettem meg. A közös, kreatív csapatmunka során sok új témával találkoztam, és rengeteget tanultam mások gondolkodásmódjából.",
        name: "Ágota",
        image: "miko_agota.jpg"
    },
    {
        quote: "Az Erasmus diákcserék számomra nemcsak arról szólnak, hogy új kultúrákat és országokat ismerhetek meg, hanem arról is, hogy rengeteg új barátot szerezhetek. Ezek az élmények megtanítottak arra, hogy merjek kilépni a komfortzónámból, hiszen sokszor éppen az így szerzett élményekből születnek a legjobb emlékek.",
        name: "Csabi",
        image: "unoka_csaba.jpg"
    },
    {
        quote: "A program során nemcsak új táncokat tanulhattunk, mint a hip-hop és a bachata, hanem számos országból érkező fiatallal is megismerkedtünk, akik közül nagy barátságokat kötöttünk. Kedvenc élményem az volt, amikor együtt buliztunk a szállás medencéje mellett és party játékokat játszottunk.",
        name: "Gábor",
        image: "kovacs_gabor.jpg"
    },
];

export default function TestimonialsSection() {
    return (
        <div className="flex flex-col items-center pb-[110px] sm:pb-[24px] responsive-height">
        <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="slow"
                pauseOnHover={true}
                className="justify-start"
            />
            <InfiniteMovingCards
                items={testimonials}
                direction="right"
                speed="slow"
                pauseOnHover={true}
                className="justify-start"
            />
        </div>
    );
}
