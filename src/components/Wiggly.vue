<template>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none">
        <defs>
            <filter id="squiggly-0">
                <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="1"
                    result="noise"
                    seed="0"
                />
                <feDisplacementMap
                    id="displacement"
                    in="SourceGraphic"
                    in2="noise"
                    scale="6"
                />
            </filter>
            <filter id="squiggly-1">
                <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="1"
                    result="noise"
                    seed="1"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>

            <filter id="squiggly-2">
                <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="1"
                    result="noise"
                    seed="2"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
            <filter id="squiggly-3">
                <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="1"
                    result="noise"
                    seed="3"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
            </filter>

            <filter id="squiggly-4">
                <feTurbulence
                    id="turbulence"
                    baseFrequency="0.02"
                    numOctaves="1"
                    result="noise"
                    seed="4"
                />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
            </filter>
        </defs>
    </svg>
</template>

<style>
.wiggly {
    -webkit-animation: squiggly-anim 0.34s linear infinite;
    animation: squiggly-anim 0.34s linear infinite;
}

@-webkit-keyframes squiggly-anim {
    0% {
        filter: url("#squiggly-0");
    }
    25% {
        filter: url("#squiggly-1");
    }
    50% {
        filter: url("#squiggly-2");
    }
    75% {
        filter: url("#squiggly-3");
    }
    100% {
        filter: url("#squiggly-4");
    }
}
@keyframes squiggly-anim {
    0% {
        filter: url("#squiggly-0");
    }
    25% {
        filter: url("#squiggly-1");
    }
    50% {
        filter: url("#squiggly-2");
    }
    75% {
        filter: url("#squiggly-3");
    }
    100% {
        filter: url("#squiggly-4");
    }
}
</style>