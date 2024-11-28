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
                        Text::make('Текст кнопки "Купить"', 'buy_text')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Первый экран', [
                        Text::make('Подзаголовок', 'first_screen_subtitle')
                            ->hideOnIndex(),
                        Text::make('Заголовок', 'first_screen_title')
                            ->hideOnIndex(),
                        Text::make('Дата', 'first_screen_date')
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'first_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'first_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Второй экран', [
                        Text::make('Заголовок', 'second_screen_title')
                            ->hideOnIndex(),
                        Json::make('Значения', 'second_screen_values')
                            ->fields([
                                Text::make('Значение', 'value')
                                    ->unescape(),
                                Text::make('Описание', 'description')
                                    ->unescape(),
                                Text::make('Дополнительный текст. Выводится на десктопе', 'add-text')
                            ])
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'second_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'second_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Третий экран', [
                        Text::make('Заголовок', 'third_screen_text')
                            ->unescape()
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'third_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'third_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Четвёртый экран', [
                        Text::make('Заголовок', 'fourth_screen_title')
                            ->unescape()
                            ->hideOnIndex(),
                        Text::make('Текст', 'fourth_screen_text')
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'fourth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'fourth_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Пятый экран', [
                        Text::make('Текст', 'fifth_screen_text')
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'fifth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'fifth_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Шестой экран', [
                        Text::make('Текст', 'sixth_screen_text')
                            ->unescape()
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'sixth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'sixth_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Седьмой экран', [
                        Text::make('Заголовок', 'seventh_screen_title')
                            ->hideOnIndex(),
                        Text::make('Текст', 'seventh_screen_text')
                            ->hideOnIndex(),
                        Json::make('Картинки', 'seventh_screen_imgs')
                            ->fields([
                                Image::make('', 'pic')
                            ])
                            ->removable()
                            ->hideOnIndex(),
                    ]),
                    Tab::make('Восьмой экран', [
                        Text::make('Заголовок', 'eight_screen_title')
                            ->hideOnIndex(),
                        Text::make('Текст', 'eight_screen_text')
                            ->hideOnIndex(),
                        Json::make('Картинки', 'eight_screen_imgs')
                            ->fields([
                                Image::make('', 'pic')
                            ])
                            ->removable()
                            ->hideOnIndex()
                    ]),
                    Tab::make('Девятый экран', [
                        Text::make('Заголовок', 'ninth_screen_title')
                            ->hideOnIndex(),
                        Image::make('Картинка', 'ninth_screen_img')
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'ninth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'ninth_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Десятый экран', [
                        Text::make('Заголовок', 'tenth_screen_title')
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'tenth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'tenth_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Одиннадцатый экран', [
                        Text::make('Заголовок', 'eleventh_screen_title')
                            ->hideOnIndex(),
                        Json::make('Музыка', 'eleventh_screen_musics')
                            ->fields([
                                Image::make('Изображение', 'image'),
                                Text::make('Исполнитель', 'artist'),
                                Text::make('Жанр', 'genre'),
                                File::make('Музыка файлом', 'music')
                                    ->removable()
                            ])
                            ->removable()
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'eleventh_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'eleventh_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Двенадцатый экран', [
                        Text::make('Заголовок', 'twelfth_screen_title')
                            ->hideOnIndex(),
                        Json::make('Музыка', 'twelfth_screen_musics')
                            ->fields([
                                Image::make('Изображение', 'image'),
                                Text::make('Исполнитель', 'artist'),
                                Text::make('Жанр', 'genre'),
                                File::make('Музыка файлом', 'music')
                                    ->removable()
                            ])
                            ->removable()
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'twelfth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'twelfth_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Тринадцатый экран', [
                        Text::make('Заголовок', 'thirteenth_screen_title')
                            ->hideOnIndex(),
                        Json::make('Музыка', 'thirteenth_screen_musics')
                            ->fields([
                                Image::make('Изображение', 'image'),
                                Text::make('Исполнитель', 'artist'),
                                Text::make('Жанр', 'genre'),
                                File::make('Музыка файлом', 'music')
                                    ->removable()
                            ])
                            ->removable()
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'thirteenth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'thirteenth_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Четырнадцатый экран', [
                        Text::make('Заголовок', 'fourteenth_screen_title')
                            ->hideOnIndex(),
                        Json::make('Музыка', 'fourteenth_screen_musics')
                            ->fields([
                                Image::make('Изображение', 'image'),
                                Text::make('Исполнитель', 'artist'),
                                Text::make('Жанр', 'genre'),
                                File::make('Музыка файлом', 'music')
                                    ->removable()
                            ])
                            ->removable()
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'fourteenth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'fourteenth_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Пятнадцатый экран', [
                        Text::make('Первый текст', 'fifteenth_screen_first_title')
                            ->hideOnIndex(),
                        Text::make('Второй текст', 'fifteenth_screen_second_title')
                            ->hideOnIndex(),
                        Text::make('Третий текст', 'fifteenth_screen_third_title')
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'fifteenth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'fifteenth_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Шестнадцатый экран', [
                        Text::make('Заголовок', 'sixteenth_screen_title')
                            ->hideOnIndex(),
                        Json::make('Партнёры', 'sixteenth_screen_partners')
                            ->fields([
                                Image::make('Иконка', 'icon'),
                                Text::make('Ссылка', 'link'),
                            ])
                            ->removable()
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'sixteenth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'sixteenth_screen_bg_desk')
                            ->hideOnIndex()
                    ]),
                    Tab::make('Финальный экран', [
                        Text::make('Заголовок', 'eighteenth_screen_title')
                            ->hideOnIndex(),
                        Json::make('Социальные сети', 'eighteenth_screen_socials')
                            ->fields([
                                Text::make('Заголовок иконки', 'title'),
                                Text::make('Ссылка на соц. сеть', 'link'),
                                Image::make('Иконка в формате svg', 'icon')
                                    ->allowedExtensions(['svg'])
                            ]),
                        Json::make('Контакты', 'eighteenth_screen_contacts')
                            ->fields([
                                Text::make('Заголовок', 'title'),
                                Text::make('Ссылка', 'link')
                            ])
                            ->hideOnIndex(),
                        Text::make('Копирайт', 'eighteenth_screen_label')
                            ->hideOnIndex(),
                        Image::make('Задний фон', 'eighteenth_screen_bg')
                            ->hideOnIndex(),
                        Image::make('Задний фон (для десктопа)', 'eighteenth_screen_bg_desk')
                            ->hideOnIndex()
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
