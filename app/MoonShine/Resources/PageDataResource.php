<?php

declare(strict_types=1);

namespace App\MoonShine\Resources;

use Illuminate\Database\Eloquent\Model;
use App\Models\PageData;

use MoonShine\Decorations\Tabs; 
use MoonShine\Decorations\Tab; 
use MoonShine\Resources\ModelResource;
use MoonShine\Decorations\Block;
use MoonShine\Fields\ID;
use MoonShine\Fields\Field;
use MoonShine\Fields\File;
use MoonShine\Fields\Text;
use MoonShine\Fields\Image;
use MoonShine\Fields\Json;
use MoonShine\Components\MoonShineComponent;

/**
 * @extends ModelResource<PageData>
 */
class PageDataResource extends ModelResource
{
    protected string $model = PageData::class;

    protected string $title = 'PageData';

    /**
     * @return list<MoonShineComponent|Field>
     */
    public function fields(): array
    {
        return [
            Block::make([
                ID::make()->sortable(),
                Tabs::make([
                    Tab::make('SEO', [
                        Text::make('Seo title', 'seo_title'),
                        Text::make('Seo description', 'seo_description'),
                        Text::make('Seo keywords', 'seo_keywords')
                    ]),
                    Tab::make('Основные данные', [
                        Text::make('Текст кнопки "Купить"', 'buy_text'),
                        Text::make('Ссылка кнопки "Купить"', 'buy_link')
                    ]),
                    Tab::make('Первый экран', [
                        Text::make('Подзаголовок', 'first_screen_subtitle'),
                        Text::make('Заголовок', 'first_screen_title'),
                        Text::make('Дата', 'first_screen_date'),
                        Image::make('Задний фон', 'first_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'first_screen_bg_desk')
                    ]),
                    Tab::make('Второй экран', [
                        Text::make('Заголовок', 'second_screen_title'),
                        Json::make('Значения', 'second_screen_values')
                            ->fields([
                                Text::make('Значение', 'value'),
                                Text::make('Описание', 'description')
                            ]),
                        Image::make('Задний фон', 'second_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'second_screen_bg_desk')
                    ]),
                    Tab::make('Третий экран', [
                        Text::make('Заголовок', 'third_screen_text'),
                        Image::make('Задний фон', 'third_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'third_screen_bg_desk')
                    ]),
                    Tab::make('Четвёртый экран', [
                        Text::make('Заголовок', 'fourth_screen_title'),
                        Text::make('Текст', 'fourth_screen_text'),
                        Image::make('Задний фон', 'fourth_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'fourth_screen_bg_desk')
                    ]),
                    Tab::make('Пятый экран', [
                        Text::make('Текст', 'fifth_screen_text'),
                        Image::make('Задний фон', 'n_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'n_screen_bg_desk')
                    ]),
                    Tab::make('Шестой экран', [
                        Text::make('Текст', 'sixth_screen_text'),
                        Image::make('Задний фон', 'sixth_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'sixth_screen_bg_desk')
                    ]),
                    Tab::make('Седьмой экран', [
                        Text::make('Заголовок', 'seventh_screen_title'),
                        Text::make('Текст', 'seventh_screen_text'),
                        Json::make('Картинки', 'seventh_screen_imgs'),
                        Image::make('Задний фон', 'seventh_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'seventh_screen_bg_desk')
                    ]),
                    Tab::make('Восьмой экран', [
                        Text::make('Заголовок', 'eighth_screen_title'),
                        Text::make('Текст', 'eighth_screen_text'),
                        Image::make('Картинки', 'eighth_screen_imgs')
                            ->multiple()
                    ]),
                    Tab::make('Девятый экран', [
                        Text::make('Заголовок', 'ninth_screen_title'),
                        Text::make('Картинка', 'ninth_screen_img'),
                        Image::make('Задний фон', 'ninth_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'ninth_screen_bg_desk')
                    ]),
                    Tab::make('Десятый экран', [
                        Text::make('Заголовок', 'tenth_screen_title'),
                        Image::make('Задний фон', 'n_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'n_screen_bg_desk')
                    ]),
                    Tab::make('Одиннадцатый экран', [
                        Text::make('Заголовок', 'eleventh_screen_title'),
                        Json::make('Музыка', 'eleventh_screen_musics')
                            ->fields([
                                Text::make('Исполнитель', 'artist'),
                                Text::make('Жанр', 'genre'),
                                File::make('Музыка файлом', 'music')
                            ]),
                        Image::make('Задний фон', 'eleventh_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'eleventh_screen_bg_desk')
                    ]),
                    Tab::make('Двенадцатый экран', [
                        Text::make('Заголовок', 'twelfth_screen_title'),
                        Json::make('Музыка', 'twelfth_screen_musics')
                            ->fields([
                                Text::make('Исполнитель', 'artist'),
                                Text::make('Жанр', 'genre'),
                                File::make('Музыка файлом', 'music')
                            ]),
                        Image::make('Задний фон', 'twelfth_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'twelfth_screen_bg_desk')
                    ]),
                    Tab::make('Тринадцатый экран', [
                        Text::make('Заголовок', 'thirteenth_screen_title'),
                        Json::make('Музыка', 'thirteenth_screen_musics')
                            ->fields([
                                Text::make('Исполнитель', 'artist'),
                                Text::make('Жанр', 'genre'),
                                File::make('Музыка файлом', 'music')
                            ]),
                        Image::make('Задний фон', 'thirteenth_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'thirteenth_screen_bg_desk')
                    ]),
                    Tab::make('Четырнадцатый экран', [
                        Text::make('Заголовок', 'fourteenth_screen_title'),
                        Json::make('Музыка', 'fourteenth_screen_musics')
                            ->fields([
                                Text::make('Исполнитель', 'artist'),
                                Text::make('Жанр', 'genre'),
                                File::make('Музыка файлом', 'music')
                            ]),
                        Image::make('Задний фон', 'fourteenth_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'fourteenth_screen_bg_desk')
                    ]),
                    Tab::make('Пятнадцатый экран', [
                        Text::make('Первый текст', 'fifteenth_screen_first_title'),
                        Text::make('Второй текст', 'fifteenth_screen_second_title'),
                        Text::make('Третий текст', 'fifteenth_screen_third_title'),
                        Image::make('Задний фон', 'fifteenth_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'fifteenth_screen_bg_desk')
                    ]),
                    Tab::make('Шестнадцатый экран', [
                        Text::make('Заголовок', 'sixteenth_screen_title'),
                        Text::make('Партнёры', 'sixteenth_screen_partners'),
                        Image::make('Задний фон', 'n_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'n_screen_bg_desk')
                    ]),
                    Tab::make('Финальный экран', [
                        Text::make('Заголовок', 'eighteenth_screen_title'),
                        Json::make('Социальные сети', 'eighteenth_screen_socials')
                            ->fields([
                                Text::make('Заголовок иконки', 'title'),
                                Text::make('Ссылка на соц. сеть', 'link'),
                                File::make('Иконка в формате svg', 'icon')
                                    ->allowedExtensions(['svg'])
                            ]),
                        Json::make('Контакты', 'eighteenth_screen_contacts')
                            ->fields([
                                Text::make('Заголовок', 'title'),
                                Text::make('Ссылка', 'link')
                            ]),
                        Text::make('Копирайт', 'eighteenth_screen_label'),
                        Image::make('Задний фон', 'eighteenth_screen_bg'),
                        Image::make('Задний фон (для десктопа)', 'eighteenth_screen_bg_desk')
                    ]),
                ])->vertical()
            ]),
        ];
    }

    /**
     * @param PageData $item
     *
     * @return array<string, string[]|string>
     * @see https://laravel.com/docs/validation#available-validation-rules
     */
    public function rules(Model $item): array
    {
        return [];
    }
}
