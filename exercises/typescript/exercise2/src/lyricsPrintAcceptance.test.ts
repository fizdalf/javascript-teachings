import {LyricsPrint} from "./lyricsPrint";

describe('LyricsPrint Class', function () {


    describe('findTreasurePosition', function () {

        it("Short simple test", function () {
            const lyrics = [
                [
                    'Hey',
                    'you',
                ],
                [
                    'Good',
                    'luck',
                ]
            ];
            expect(LyricsPrint(lyrics)).toStrictEqual(
                [
                    ['H_'],
                    ['He_'],
                    ['Hey_'],
                    ['Hey', 'y_'],
                    ['Hey', 'yo_'],
                    ['Hey', 'you_'],
                    ['G_'],
                    ['Go_'],
                    ['Goo_'],
                    ['Good_'],
                    ['Good', 'l_'],
                    ['Good', 'lu_'],
                    ['Good', 'luc_'],
                    ['Good', 'luck_']
                ]
            );
        });
        it("Long lyrics advenced test", function () {
            const lyrics = [
                [
                    'Well here we are again',
                    'Its always such a pleasure',
                ],
                [
                    'You want your freedom?',
                    'Take it',
                ]
            ];
            expect(LyricsPrint(lyrics)).toStrictEqual(
                [
                    ['W_'],
                    ['We_'],
                    ['Wel_'],
                    ['Well_'],
                    ['Well _'],
                    ['Well h_'],
                    ['Well he_'],
                    ['Well her_'],
                    ['Well here_'],
                    ['Well here _'],
                    ['Well here w_'],
                    ['Well here we_'],
                    ['Well here we _'],
                    ['Well here we a_'],
                    ['Well here we ar_'],
                    ['Well here we are_'],
                    ['Well here we are _'],
                    ['Well here we are a_'],
                    ['Well here we are ag_'],
                    ['Well here we are aga_'],
                    ['Well here we are agai_'],
                    ['Well here we are again_'],
                    ['Well here we are again', 'I_'],
                    ['Well here we are again', 'It_'],
                    ['Well here we are again', 'Its_'],
                    ['Well here we are again', 'Its _'],
                    ['Well here we are again', 'Its a_'],
                    ['Well here we are again', 'Its al_'],
                    ['Well here we are again', 'Its alw_'],
                    ['Well here we are again', 'Its alwa_'],
                    ['Well here we are again', 'Its alway_'],
                    ['Well here we are again', 'Its always_'],
                    ['Well here we are again', 'Its always _'],
                    ['Well here we are again', 'Its always s_'],
                    ['Well here we are again', 'Its always su_'],
                    ['Well here we are again', 'Its always suc_'],
                    ['Well here we are again', 'Its always such_'],
                    ['Well here we are again', 'Its always such _'],
                    ['Well here we are again', 'Its always such a_'],
                    ['Well here we are again', 'Its always such a _'],
                    ['Well here we are again', 'Its always such a p_'],
                    ['Well here we are again', 'Its always such a pl_'],
                    ['Well here we are again', 'Its always such a ple_'],
                    ['Well here we are again', 'Its always such a plea_'],
                    ['Well here we are again', 'Its always such a pleas_'],
                    ['Well here we are again', 'Its always such a pleasu_'],
                    ['Well here we are again', 'Its always such a pleasur_'],
                    ['Well here we are again', 'Its always such a pleasure_'],
                    ['Y_'],
                    ['Yo_'],
                    ['You_'],
                    ['You _'],
                    ['You w_'],
                    ['You wa_'],
                    ['You wan_'],
                    ['You want_'],
                    ['You want _'],
                    ['You want y_'],
                    ['You want yo_'],
                    ['You want you_'],
                    ['You want your_'],
                    ['You want your _'],
                    ['You want your f_'],
                    ['You want your fr_'],
                    ['You want your fre_'],
                    ['You want your free_'],
                    ['You want your freed_'],
                    ['You want your freedo_'],
                    ['You want your freedom_'],
                    ['You want your freedom?_'],
                    ['You want your freedom?', 'T_'],
                    ['You want your freedom?', 'Ta_'],
                    ['You want your freedom?', 'Tak_'],
                    ['You want your freedom?', 'Take_'],
                    ['You want your freedom?', 'Take _'],
                    ['You want your freedom?', 'Take i_'],
                    ['You want your freedom?', 'Take it_']
                ]
            );
        });
    })
})

