<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PageData extends Model
{
    protected $casts = [
        'second_screen_values' => 'json',
        'seventh_screen_imgs' => 'json',
        'eight_screen_imgs' => 'json',
        'eleventh_screen_musics' => 'json',
        'twelfth_screen_musics' => 'json',
        'thirteenth_screen_musics' => 'json',
        'fourteenth_screen_musics' => 'json',
        'sixteenth_screen_partners' => 'json',
        'eghteenth_screen_socials' => 'json',
        'eghteenth_screen_contacts' => 'json',
    ];
}
