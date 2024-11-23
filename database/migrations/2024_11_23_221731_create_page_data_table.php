<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('page_data', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('seo_title');
            $table->string('seo_description');
            $table->string('seo_keywords');
            $table->string('buy_text');
            $table->string('buy_link');
            $table->string('first_screen_subtitle');
            $table->string('first_screen_title');
            $table->string('first_screen_date');
            $table->string('first_screen_bg');
            $table->string('first_screen_bg_desk');
            $table->string('second_screen_title');
            $table->json('second_screen_values');
            $table->string('second_screen_bg');
            $table->string('third_screen_text');
            $table->string('third_screen_bg');
            $table->string('third_screen_bg_desk');
            $table->string('fourth_screen_title');
            $table->string('fourth_screen_text');
            $table->string('fourth_screen_bg');
            $table->string('fourth_screen_bg_desk');
            $table->string('fifth_screen_text');
            $table->string('fifth_screen_bg');
            $table->string('fifth_screen_bg_desk');
            $table->string('sixth_screen_text');
            $table->string('sixth_screen_bg');
            $table->string('sixth_screen_bg_desk');
            $table->string('seventh_screen_title');
            $table->string('seventh_screen_text');
            $table->json('seventh_screen_imgs');
            $table->string('seventh_screen_bg');
            $table->string('seventh_screen_bg_desk');
            $table->string('eight_screen_title');
            $table->string('eight_screen_text');
            $table->json('eight_screen_imgs');
            $table->string('ninth_screen_title');
            $table->string('ninth_screen_img');
            $table->string('ninth_screen_bg');
            $table->string('ninth_screen_bg_desk');
            $table->string('tenth_screen_title');
            $table->string('tenth_screen_bg');
            $table->string('tenth_screen_bg_desk');
            $table->string('eleventh_screen_title');
            $table->json('eleventh_screen_musics');
            $table->string('eleventh_screen_bg');
            $table->string('eleventh_screen_bg_desk');
            $table->string('twelfth_screen_title');
            $table->json('twelfth_screen_musics');
            $table->string('twelfth_screen_bg');
            $table->string('twelfth_screen_bg_desk');
            $table->string('thirteenth_screen_title');
            $table->json('thirteenth_screen_musics');
            $table->string('thirteenth_screen_bg');
            $table->string('thirteenth_screen_bg_desk');
            $table->string('fourteenth_screen_title');
            $table->json('fourteenth_screen_musics');
            $table->string('fourteenth_screen_bg');
            $table->string('fourteenth_screen_bg_desk');
            $table->string('fifteenth_screen_first_title');
            $table->string('fifteenth_screen_second_title');
            $table->string('fifteenth_screen_third_title');
            $table->string('fifteenth_screen_bg');
            $table->string('fifteenth_screen_bg_desk');
            $table->string('sixteenth_screen_title');
            $table->json('sixteenth_screen_partners');
            $table->string('sixteenth_screen_bg');
            $table->string('sixteenth_screen_bg_desk');
            $table->string('eighteenth_screen_title');
            $table->json('eighteenth_screen_socials');
            $table->json('eighteenth_screen_contacts');
            $table->string('eighteenth_screen_label');
            $table->string('eighteenth_screen_bg');
            $table->string('eighteenth_screen_bg_desk');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('page_data');
    }
};
