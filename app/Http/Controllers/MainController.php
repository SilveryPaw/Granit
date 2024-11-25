<?php

namespace App\Http\Controllers;
use App\Models\PageData;

class MainController
{
    private $data;

    public function index()
    {
        $this->data = PageData::first()->toArray();

        return view('page', [
            'screens' => [
                'first' => $this->getFirstScreen(),
                'second' => $this->getSecondScreen(),
                'third' => $this->getThirdScreen(),
                'fourth' => $this->getFourthScreen(),
                'fifth' => $this->getFifthScreen(),
                'sixth' => $this->getSixthScreen(),
                'white' => $this->getWhiteScreen(),
                'seventh' => $this->getSeventhScreen(),
                'eighth' => $this->getEighthScreen(),
                'ninth' => $this->getNinthScreen(),
                'tenth' => $this->getTenthScreen(),
                'eleventh' => $this->getEleventhScreen(),
                'twelfth' => $this->getTwelfthScreen(),
                'thirteenth' => $this->getThirteenthScreen(),
                'fourteenth' => $this->getFourteenthScreen(),
                'fifteenth' => $this->getFifteenthScreen(),
                'sixteenth' => $this->getSixteenthScreen(),
                'final' => $this->getFinalScreen()
            ],
            'header' => $this->getHeaderBlock(),
            'buyButton' => $this->getBuyButton()
        ]);
    }

    private function getFirstScreen()
    {
        return view('screens.first-screen', [
            'subtitle' => $this->data['first_screen_subtitle'],
            'title' => $this->data['first_screen_title'],
            'date' => $this->data['first_screen_date']
        ]);
    }

    private function getSecondScreen()
    {
        if(isset($this->data['second_screen_bg'])) {
            $mobile = \Storage::disk('public')->url($this->data['second_screen_bg']);
        }
        if(isset($this->data['second_screen_bg_desk'])) {
            $desk = \Storage::disk('public')->url($this->data['second_screen_bg_desk']);
        }
        return view('screens.second-screen', [
            'title' => preg_split('/ /', $this->data['second_screen_title']),
            'values' => $this->data['second_screen_values'],
            'bg' => [
                'mobile' => $mobile ?? null,
                'desk' => $desk ?? null
            ]
        ]);
    }

    private function getThirdScreen()
    {
        return view('screens.third-screen', [
            'text' => preg_split('/ /', $this->data['third_screen_text']),
            'bg' => $this->getBg('third')
        ]);
    }

    private function getFourthScreen()
    {
        return view('screens.fourth-screen', [
            'title' => $this->data['fourth_screen_title'],
            'text' => $this->data['fourth_screen_text'],
            'bg' => [
                'mobile' => [
                    'top' => '/imgs/fourth-screen/4-bgm-1.png',
                    'bottom' => '/imgs/fourth-screen/4-bgm-2.png'
                ]
            ]
        ]);
    }

    private function getFifthScreen()
    {
        return view('screens.fifth-screen', [
            'text' => preg_split('/\|/', $this->data['fifth_screen_text']),
            'bg' => $this->getBg('fifth')
        ]);
    }

    private function getSixthScreen()
    {
        return view('screens.sixth-screen', [
            'text' => $this->data['sixth_screen_text'],
        ]);
    }

    private function getWhiteScreen()
    {
        return view('screens.white-screen');
    }

    private function getSeventhScreen()
    {
        $imgs = [];
        foreach($this->data['seventh_screen_imgs'] as $img) {
            $imgs[] = \Storage::disk('public')->url($img['pic']);
        }
        return view('screens.seventh-screen', [
            'title' => $this->data['seventh_screen_title'],
            'text' => $this->data['seventh_screen_text'],
            'imgs' => $imgs,
            'bg' => [
                'mobile' => '/imgs/seventh-screen/bgm.png',
                'desk' => ''
            ]
        ]);
    }

    private function getEighthScreen()
    {
        $imgs = [];
        foreach($this->data['eight_screen_imgs'] as $img) {
            $imgs[] = \Storage::disk('public')->url($img['pic']);
        }
        return view('screens.seventh-screen', [
            'title' => $this->data['eight_screen_title'],
            'text' => $this->data['eight_screen_text'],
            'imgs' => $imgs,
        ]);
    }

    private function getNinthScreen()
    {
        return view('screens.ninth-screen', [
            'title' => $this->data['ninth_screen_title'],
            'img' => \Storage::disk('public')->url($this->data['ninth_screen_img']),
            'bg' => $this->getBg('ninth')
        ]);
    }

    private function getTenthScreen()
    {
        return view('screens.tenth-screen', [
            'title' => preg_split('/\|/', $this->data['tenth_screen_title']),
            'bg' => $this->getBg('tenth')
        ]);
    }

    private function getEleventhScreen()
    {
        return view('screens.eleventh-screen', [
            'title' => $this->data['eleventh_screen_title'],
            'musics' => $this->getMuscis('eleventh'),
            'nav' => $this->getNavIcons(),
            'index' => 11,
            'bg' => $this->getBg('eleventh')
        ]);
    }

    private function getTwelfthScreen()
    {
        return view('screens.eleventh-screen', [
            'title' => $this->data['twelfth_screen_title'],
            'musics' => $this->getMuscis('twelfth'),
            'nav' => $this->getNavIcons(),
            'index' => 12,
            'bg' => $this->getBg('twelfth')
        ]);
    }

    private function getThirteenthScreen()
    {
        return view('screens.eleventh-screen', [
            'title' => $this->data['thirteenth_screen_title'],
            'musics' => $this->getMuscis('thirteenth'),
            'nav' => $this->getNavIcons(),
            'index' => 13,
            'bg' => $this->getBg('thirteenth')
        ]);
    }

    private function getFourteenthScreen()
    {
        return view('screens.eleventh-screen', [
            'title' => $this->data['fourteenth_screen_title'],
            'musics' => $this->getMuscis('fourteenth'),
            'nav' => $this->getNavIcons(),
            'index' => 14,
            'bg' => $this->getBg('fourteenth')
        ]);
    }

    private function getFifteenthScreen()
    {
        return view('screens.fifteenth-screen', [
            'text' => [
                'first' => $this->data['fifteenth_screen_first_title'],
                'second' => $this->data['fifteenth_screen_second_title'],
                'third' => $this->data['fifteenth_screen_third_title']
            ],
            'bg' => $this->getBg('fifteenth')
        ]);
    }

    private function getSixteenthScreen()
    {
        $partners = [];
        foreach($this->data['sixteenth_screen_partners'] as $partner) {
            $partners[] = [
                'icon' => \Storage::disk('public')->get($partner['icon']),
                'link' => $partner['link']
            ];
        }
        $chunks = array_chunk($partners, ceil(count($partners) / 2));
        return view('screens.sixteenth-screen', [
            'title' => $this->data['sixteenth_screen_title'],
            'partners' => [
                'chunk1' => $chunks[0],
                'chunk2' => $chunks[1]
            ]
        ]);
    }

    private function getFinalScreen()
    {
        $socials = [];
        foreach($this->data['eighteenth_screen_socials'] as $social) {
            $socials[] = [
                'title' => $social['title'],
                'link' => $social['link'],
                'icon' => \Storage::disk('public')->get($social['icon'])
            ];
        }

        foreach($this->data['eighteenth_screen_contacts'] as $contact) {
            if(preg_match('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', $contact['link'])) {
                $href = 'mailto:' . $contact['link'];
            } else if (preg_match('/^(\+7|8)\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/', $contact['link'])) {
                $href = 'tel:' . $contact['link'];
            } else {
                $href = $contact['link'];
            }

            $contacts[] = [
                'title' => $contact['title'],
                'linkText' => $contact['link'],
                'href' => $href
            ];
        }

        return view('screens.final-screen', [
            'title' => $this->data['eighteenth_screen_title'],
            'socials' => $socials,
            'contacts' => $contacts,
            'copyright' => $this->data['eighteenth_screen_label']
        ]);
    }

    private function getBuyButton()
    {
        return view('parts.buy-button', [
            'text' => $this->data['buy_text'],
            'link' => $this->data['buy_link']
        ]);
    }

    private function getHeaderBlock()
    {
        return view('parts.header', [
            'logo' => file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/imgs/icons/logo.svg'),
            'menu' => [
                'third' => 'Шоу',
                'tenth' => 'Лайнап',
                'sixteenth' => 'Партнёры',
                'final' => 'Контакты'
            ]
        ]);
    }

    private function getNavIcons()
    {
        return [
            'play' => file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/imgs/icons/play.svg'),
            'next' => file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/imgs/icons/next.svg')
        ];
    }

    private function getMuscis($screen)
    {
        $muscis = [];
        $key = $screen . '_screen_musics';
        foreach($this->data[$key] as $music) {
            $musics[] = [
                'img' => \Storage::disk('public')->url($music['image']),
                'src' => \Storage::disk('public')->url($music['music']),
                'author' => $music['artist'],
                'genre' => $music['genre']
            ];
        }
        return $musics;
    }

    private function getBg($screen)
    {
        $mobileName = $screen . '_screen_bg';
        $deskName = $screen . '_screen_bg_desk';

        if(isset($this->data[$mobileName])) {
            $mobile = \Storage::disk('public')->url($this->data[$mobileName]);
        }
        if(isset($this->data[$deskName])) {
            $desk = \Storage::disk('public')->url($this->data[$deskName]);
        }
        return [
            'mobile' => $mobile ?? null,
            'desk' => $desk ?? null
        ];
    }
}