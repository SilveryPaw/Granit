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
            $table->string('seo_title')->nullable();
            $table->string('seo_description')->nullable();
            $table->string('seo_keywords')->nullable();
            $table->string('buy_text')->nullable();
            $table->string('buy_link')->nullable();
            $table->string('first_screen_subtitle')->nullable();
            $table->string('first_screen_title')->nullable();
            $table->string('first_screen_date')->nullable();
            $table->string('first_screen_bg')->nullable();
            $table->string('first_screen_bg_desk')->nullable();
            $table->string('second_screen_title')->nullable();
            $table->json('second_screen_values')->nullable();
            $table->string('second_screen_bg')->nullable();
            $table->string('second_screen_bg_desk')->nullable();
            $table->string('third_screen_text')->nullable();
            $table->string('third_screen_bg')->nullable();
            $table->string('third_screen_bg_desk')->nullable();
            $table->string('fourth_screen_title')->nullable();
            $table->string('fourth_screen_text')->nullable();
            $table->string('fourth_screen_bg')->nullable();
            $table->string('fourth_screen_bg_desk')->nullable();
            $table->string('fifth_screen_text')->nullable();
            $table->string('fifth_screen_bg')->nullable();
            $table->string('fifth_screen_bg_desk')->nullable();
            $table->string('sixth_screen_text')->nullable();
            $table->string('sixth_screen_bg')->nullable();
            $table->string('sixth_screen_bg_desk')->nullable();
            $table->string('seventh_screen_title')->nullable();
            $table->string('seventh_screen_text')->nullable();
            $table->json('seventh_screen_imgs')->nullable();
            $table->string('seventh_screen_bg')->nullable();
            $table->string('seventh_screen_bg_desk')->nullable();
            $table->string('eight_screen_title')->nullable();
            $table->string('eight_screen_text')->nullable();
            $table->json('eight_screen_imgs')->nullable();
            $table->string('ninth_screen_title')->nullable();
            $table->string('ninth_screen_img')->nullable();
            $table->string('ninth_screen_bg')->nullable();
            $table->string('ninth_screen_bg_desk')->nullable();
            $table->string('tenth_screen_title')->nullable();
            $table->string('tenth_screen_bg')->nullable();
            $table->string('tenth_screen_bg_desk')->nullable();
            $table->string('eleventh_screen_title')->nullable();
            $table->json('eleventh_screen_musics')->nullable();
            $table->string('eleventh_screen_bg')->nullable();
            $table->string('eleventh_screen_bg_desk')->nullable();
            $table->string('twelfth_screen_title')->nullable();
            $table->json('twelfth_screen_musics')->nullable();
            $table->string('twelfth_screen_bg')->nullable();
            $table->string('twelfth_screen_bg_desk')->nullable();
            $table->string('thirteenth_screen_title')->nullable();
            $table->json('thirteenth_screen_musics')->nullable();
            $table->string('thirteenth_screen_bg')->nullable();
            $table->string('thirteenth_screen_bg_desk')->nullable();
            $table->string('fourteenth_screen_title')->nullable();
            $table->json('fourteenth_screen_musics')->nullable();
            $table->string('fourteenth_screen_bg')->nullable();
            $table->string('fourteenth_screen_bg_desk')->nullable();
            $table->string('fifteenth_screen_first_title')->nullable();
            $table->string('fifteenth_screen_second_title')->nullable();
            $table->string('fifteenth_screen_third_title')->nullable();
            $table->string('fifteenth_screen_bg')->nullable();
            $table->string('fifteenth_screen_bg_desk')->nullable();
            $table->string('sixteenth_screen_title')->nullable();
            $table->json('sixteenth_screen_partners')->nullable();
            $table->string('sixteenth_screen_bg')->nullable();
            $table->string('sixteenth_screen_bg_desk')->nullable();
            $table->string('eighteenth_screen_title')->nullable();
            $table->json('eighteenth_screen_socials')->nullable();
            $table->json('eighteenth_screen_contacts')->nullable();
            $table->string('eighteenth_screen_label')->nullable();
            $table->string('eighteenth_screen_bg')->nullable();
            $table->string('eighteenth_screen_bg_desk')->nullable();
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
