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
            'screens' => $this->getTenthScreen()
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
            'bg' => [
                'mobile' => '',
                'desk' => ''
            ]
        ]);
    }

    private function getSixthScreen()
    {
        return view('screens.sixth-screen', [
            'text' => $this->data['sixth_screen_text'],
            'bg' => [
                'mobile' => '',
                'desk' => ''
            ]
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
            'bg' => [
                'mobile' => '/imgs/seventh-screen/bgm.png',
                'desk' => ''
            ]
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