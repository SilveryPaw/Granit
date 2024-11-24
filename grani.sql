-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 25 2024 г., 00:37
-- Версия сервера: 5.7.33
-- Версия PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `grani`
--

-- --------------------------------------------------------

--
-- Структура таблицы `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `value` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('grani_cache_mentor|::1', 'i:1;', 1732381756),
('grani_cache_mentor|::1:timer', 'i:1732381756;', 1732381756);

-- --------------------------------------------------------

--
-- Структура таблицы `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `owner` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `options` mediumtext COLLATE utf8mb4_unicode_ci,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2020_10_04_115514_create_moonshine_roles_table', 2),
(5, '2020_10_05_173148_create_moonshine_tables', 2),
(6, '2022_12_19_115549_create_moonshine_socialites_table', 2),
(7, '9999_12_20_173629_create_notifications_table', 2),
(8, '2024_11_23_171731_create_page_data_table', 3),
(9, '2024_11_23_221731_create_page_data_table', 4),
(10, '2024_11_24_221731_create_page_data_table', 5),
(11, '2024_11_24_091731_create_page_data_table', 6),
(12, '2024_11_24_094231_create_page_data_table', 7);

-- --------------------------------------------------------

--
-- Структура таблицы `moonshine_socialites`
--

CREATE TABLE `moonshine_socialites` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `moonshine_user_id` bigint(20) UNSIGNED NOT NULL,
  `driver` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `moonshine_users`
--

CREATE TABLE `moonshine_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `moonshine_user_role_id` bigint(20) UNSIGNED NOT NULL DEFAULT '1',
  `email` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `moonshine_users`
--

INSERT INTO `moonshine_users` (`id`, `moonshine_user_role_id`, `email`, `password`, `name`, `avatar`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 'mentor@mail.ru', '$2y$12$cELBM48OHFMnqGKPZRzIaecBv4IyTGdTLlASUww8vDN0rxYLDQkIq', 'Mentor', NULL, 'cGwVIfLP0HIckFBerQXtEFwZhtvxDgn1wn656DDZNfMGXflDOjydKm8NXK1L', '2024-11-23 13:48:55', '2024-11-23 13:48:55');

-- --------------------------------------------------------

--
-- Структура таблицы `moonshine_user_roles`
--

CREATE TABLE `moonshine_user_roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `moonshine_user_roles`
--

INSERT INTO `moonshine_user_roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', '2024-11-23 13:46:17', '2024-11-23 13:46:17');

-- --------------------------------------------------------

--
-- Структура таблицы `notifications`
--

CREATE TABLE `notifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `notifiable_id` bigint(20) UNSIGNED NOT NULL,
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `read_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `page_data`
--

CREATE TABLE `page_data` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `seo_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seo_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seo_keywords` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `buy_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `buy_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_screen_subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_screen_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `first_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `second_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `second_screen_values` json DEFAULT NULL,
  `second_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `second_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `third_screen_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `third_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `third_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fourth_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fourth_screen_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fourth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fourth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fifth_screen_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fifth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fifth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sixth_screen_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sixth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sixth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seventh_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seventh_screen_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seventh_screen_imgs` json DEFAULT NULL,
  `seventh_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `seventh_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eight_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eight_screen_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eight_screen_imgs` json DEFAULT NULL,
  `ninth_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ninth_screen_img` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ninth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ninth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tenth_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tenth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tenth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eleventh_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eleventh_screen_musics` json DEFAULT NULL,
  `eleventh_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eleventh_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twelfth_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twelfth_screen_musics` json DEFAULT NULL,
  `twelfth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twelfth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thirteenth_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thirteenth_screen_musics` json DEFAULT NULL,
  `thirteenth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thirteenth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fourteenth_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fourteenth_screen_musics` json DEFAULT NULL,
  `fourteenth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fourteenth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fifteenth_screen_first_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fifteenth_screen_second_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fifteenth_screen_third_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fifteenth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fifteenth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sixteenth_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sixteenth_screen_partners` json DEFAULT NULL,
  `sixteenth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sixteenth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eighteenth_screen_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eighteenth_screen_socials` json DEFAULT NULL,
  `eighteenth_screen_contacts` json DEFAULT NULL,
  `eighteenth_screen_label` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eighteenth_screen_bg` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `eighteenth_screen_bg_desk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `page_data`
--

INSERT INTO `page_data` (`id`, `created_at`, `updated_at`, `seo_title`, `seo_description`, `seo_keywords`, `buy_text`, `buy_link`, `first_screen_subtitle`, `first_screen_title`, `first_screen_date`, `first_screen_bg`, `first_screen_bg_desk`, `second_screen_title`, `second_screen_values`, `second_screen_bg`, `second_screen_bg_desk`, `third_screen_text`, `third_screen_bg`, `third_screen_bg_desk`, `fourth_screen_title`, `fourth_screen_text`, `fourth_screen_bg`, `fourth_screen_bg_desk`, `fifth_screen_text`, `fifth_screen_bg`, `fifth_screen_bg_desk`, `sixth_screen_text`, `sixth_screen_bg`, `sixth_screen_bg_desk`, `seventh_screen_title`, `seventh_screen_text`, `seventh_screen_imgs`, `seventh_screen_bg`, `seventh_screen_bg_desk`, `eight_screen_title`, `eight_screen_text`, `eight_screen_imgs`, `ninth_screen_title`, `ninth_screen_img`, `ninth_screen_bg`, `ninth_screen_bg_desk`, `tenth_screen_title`, `tenth_screen_bg`, `tenth_screen_bg_desk`, `eleventh_screen_title`, `eleventh_screen_musics`, `eleventh_screen_bg`, `eleventh_screen_bg_desk`, `twelfth_screen_title`, `twelfth_screen_musics`, `twelfth_screen_bg`, `twelfth_screen_bg_desk`, `thirteenth_screen_title`, `thirteenth_screen_musics`, `thirteenth_screen_bg`, `thirteenth_screen_bg_desk`, `fourteenth_screen_title`, `fourteenth_screen_musics`, `fourteenth_screen_bg`, `fourteenth_screen_bg_desk`, `fifteenth_screen_first_title`, `fifteenth_screen_second_title`, `fifteenth_screen_third_title`, `fifteenth_screen_bg`, `fifteenth_screen_bg_desk`, `sixteenth_screen_title`, `sixteenth_screen_partners`, `sixteenth_screen_bg`, `sixteenth_screen_bg_desk`, `eighteenth_screen_title`, `eighteenth_screen_socials`, `eighteenth_screen_contacts`, `eighteenth_screen_label`, `eighteenth_screen_bg`, `eighteenth_screen_bg_desk`) VALUES
(1, '2024-11-24 03:42:55', '2024-11-24 18:09:04', 'Grani', NULL, NULL, 'купить билет', NULL, 'ultimate rave show', 'grani', '28 декабря 2024, 22:00', NULL, NULL, 'почувствуйте масштаб', '[{\"value\": \"4\", \"description\": \"заряженных танцпола\"}, {\"value\": \"<span>></span> 20\", \"description\": \"легенд электроники\"}, {\"value\": \"2500\", \"description\": \"поклонников рейва\"}]', 'mFwB38WJZgl0qppb0rcpfT6J6bQmja1TPFJyBFXc.png', NULL, 'Главное рейв&#8209;шоу 2024', 'lzv7uaTkZCOkVhxa1iinvhvGyz2vMfmBquTCZ0SG.png', 'RRk9EdOQBhmHXswNDmlqVhuZmd95TouK6B0X1lM9.png', 'Первый рейв&#8209;оркестр', 'ТОП-хиты электроники в исполнении  симфонического оркестра.  Такого ты еще не видел.', NULL, NULL, 'Aero|music|show', NULL, NULL, 'Этим вечером сотрём грани жанров, чтобы Вы могли летать', NULL, NULL, 'арт перформанс', 'СТАНЬТЕ ГРАНЬЮ ЕДИНОГО ЦЕЛОГО. БОЛЬШОГО!', '[{\"pic\": \"V6RoibfEZW3GhQ78iomiKJ2kxofvf0dqkIanQBus.jpg\"}, {\"pic\": \"VmKDwh38PgwbOdDba28tcrXSYOy9o8pUU2SsvfPK.jpg\"}, {\"pic\": \"gFzXa2BNjcu283UGPd1jRzSxfP3mWgSB8GIyS6A8.jpg\"}, {\"pic\": \"24CKW8CI9lxi8CdMzULw8KO6F7Hbe7sbSVwTsYTp.jpg\"}, {\"pic\": \"gNgYRBLx8A3DNCIIGbs6nPriC68XJiPfiI0d9xQt.jpg\"}]', NULL, NULL, 'MULTIMEDIA SHOW', 'Собрали ТОП-международных мультимедиа проектов, чтобы пространство вновь обрело грани', '[{\"pic\": \"2z0AJzXqmB3Bf1ehrWc8EtLaxi20UPEc6DlFMxAp.jpg\"}, {\"pic\": \"HGmITk6qqdS1YfqSQsDJFo1TE1m1zrPRDdV4USFb.jpg\"}, {\"pic\": \"rOdtGuVaaDBrcXFaexVZ1mWQKVCuh0XR5bvW28zt.jpg\"}, {\"pic\": \"VY2ofI8LMUboxCn9Cg8SWobvlo1f2euNlAH1zHlZ.jpg\"}, {\"pic\": \"KEKEX8DZMAWDeBX6uWqpnRDDUNsIE6BqPysgiEA9.jpg\"}]', 'А грани породили рейв', '0xy5Libv2jOSW8tKh6FwpOK0rE5QT1p0EPJIh0Ig.png', 'TcEmFT8sqyEidxoz11zHgZzKR3NkCag05vA7e25z.png', NULL, 'Легенды|электроники на|4 сценах', 'FG2vZouE6jW9GQS1uabpsyPF0KXi3pN3WTkSRANQ.png', NULL, 'main stage', '[{\"genre\": \"drum’n’bass, neurofunk\", \"image\": \"yPiE4owt0UIPOqzY2dqmvmBywxgAjgfJnxGH23wW.png\", \"music\": \"U5koShJWHx2N7hAYVBwJtEVcvdlhlEAF1CBaytgv.mp3\", \"artist\": \"Akov\"}, {\"genre\": \"uk drum’n’bass, jungle\", \"image\": \"kn5G3sbybuLJ2nLuusA4z3FdMgAnwwMLy4gW38Ms.png\", \"music\": \"VOZcMmbcShEObLJ5o1EJzHdGOahwoaJgotvmfVfE.mp3\", \"artist\": \"OZMA\"}, {\"genre\": \"uk drum’n’bass, jungle\", \"image\": \"ctlXnZABN8zNuOfISI21FFRk6qPWFOViWW7mvSej.png\", \"music\": \"UsZHMxFd2PpSodOd4G1Ki1iGUZ0YrZPXho0nKi55.mp3\", \"artist\": \"LOWRIDERZ\"}]', '3BttVHbUnK69tJFWbKVE4DRqHsFBv1pBcwvrserC.png', NULL, 'Medium', '[{\"genre\": \"hip-hop\", \"image\": \"7RnVcXDGKYUI8P3llYV40fBSqecmzAehdSGduo0r.png\", \"music\": \"xztzMwtJuiR3nNOqykwEhoU7uAYZvyt07ISuT1Zc.mp3\", \"artist\": \"ACTION SIDE\"}]', 'KtYGmCClqdZEyEJRvg1bVpX6IZv62aE0z5dQsfnI.png', NULL, 'Under', '[{\"genre\": \"future Garage, future Beats\", \"image\": \"vyWHctxfI43mbzgtuPC7Cbrtic2KsABZ1rjadq2E.png\", \"music\": \"lq5EJVl6kFWgVBBlBJbHWogFNbvgSHEFAo2UN8SS.png\", \"artist\": \"CULTROW\"}]', 'VSEcnTH1MD2qibOEqBcb1HwmA454sjPn6LDRjKGc.png', NULL, 'garden', '[{\"genre\": \"micro house, intelligent electronica, breaks, electro\", \"image\": \"9EgyJGUmGX0F7gZ9kycALfhRccP9zU7B0HG4ZJtO.png\", \"music\": \"eeYMLBRszDqIm3aSchuuH7WbF4lB2FnpB3vciqCh.mp3\", \"artist\": \"Michael Dop\"}]', 'cDw2j6TnCjHTZfSge00m2K4AMBJs0XybOiHERl4v.png', NULL, 'Познай все', 'grani', 'рейва', 'l2z10lABwwNJ4kDvV5FVAsQV1MZMnPsDps9kQG07.png', NULL, 'Партнёры', '[{\"icon\": \"cU0QHylSfa5ZqvAXIoerZcm4eyMsmIoAsACgO199.svg\", \"link\": null}, {\"icon\": \"oRddB57z5oIzRnzrqpp05Y2f1jVWPEQ3XfqjdjJH.svg\", \"link\": null}, {\"icon\": \"BRnPp2scufCRhxeXudKuyKnUOVP5hm8hue7Akc9G.svg\", \"link\": null}, {\"icon\": \"mMYowf8l6HouHnUOyN0ESl4EJdVggb8PX7rSHir2.svg\", \"link\": null}, {\"icon\": \"nJqETQqCVCskBvKcxIiTX6ujjoie2wSoTQZ1A48B.svg\", \"link\": null}, {\"icon\": \"N0EyXVZ1bQbXjYp9nCgEnBxueDoySERuexxVUEXL.svg\", \"link\": null}, {\"icon\": \"VcBy9zWVbA0DppRVmYlEjOpGNs2PdRNJL9BzuSGk.svg\", \"link\": null}, {\"icon\": \"Mv9btvMl29ofne7moE89yExCMFs4ckqZDouqIZQe.svg\", \"link\": null}, {\"icon\": \"GD0cKIGycddB0HInjSPIW8JvrHobQRidv4SUuiP8.svg\", \"link\": null}]', NULL, NULL, 'Контакты', '[{\"icon\": \"vda5rVC5wHeI0QNm8DlHMgkIlEBvr4yoGZT1johi.svg\", \"link\": \"https://vk.com/\", \"title\": \"Группа вк\"}, {\"icon\": \"dhw3z7uxBKUuWwPw6cHJINP7eUN8fz1uWp4dzMPv.svg\", \"link\": \"https://web.telegram.org/\", \"title\": \"Группа телеграм\"}, {\"icon\": \"7KYkOAVs4laA3JKVFGy1kO7en13b0y2zspMgBMgE.svg\", \"link\": \"https://instagram.com/\", \"title\": \"Группа инстаграмм\"}]', '[{\"link\": \"info@granirave.ru\", \"title\": \"Покупка/возврат билетов\"}, {\"link\": \"press@granirave.ru\", \"title\": \"Сотрудничество и пресса\"}, {\"link\": \"art@granirave.ru\", \"title\": \"Для исполнителей\"}, {\"link\": \"pr@granirave.ru\", \"title\": \"Промоутер? Пиши!\"}]', 'Not good people © 2024', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_agent` text COLLATE utf8mb4_unicode_ci,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('8dk9G9olrvzq6v4wkQDOtJNKtaRmELeyuHCTf09m', NULL, '::1', 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiUkdYYWJHckdhb0Y5RllVeHpNU0ttUmJqSEdJYzU2V2dkbzYxQUZrSyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MTY6Imh0dHA6Ly9sb2NhbGhvc3QiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjU2OiJsb2dpbl9tb29uc2hpbmVfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6MjM6InBhc3N3b3JkX2hhc2hfbW9vbnNoaW5lIjtzOjYwOiIkMnkkMTIkY0VMQk00OE9IRk1ucUdLUFpSeklhZWNCdjRJeVRHZFRMbEFTVXd3OHZETjByeFlMRFFrSXEiO30=', 1732482674);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Индексы таблицы `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Индексы таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Индексы таблицы `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Индексы таблицы `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `moonshine_socialites`
--
ALTER TABLE `moonshine_socialites`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `moonshine_socialites_driver_identity_unique` (`driver`,`identity`);

--
-- Индексы таблицы `moonshine_users`
--
ALTER TABLE `moonshine_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `moonshine_users_email_unique` (`email`),
  ADD KEY `moonshine_users_moonshine_user_role_id_foreign` (`moonshine_user_role_id`);

--
-- Индексы таблицы `moonshine_user_roles`
--
ALTER TABLE `moonshine_user_roles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notifications_notifiable_type_notifiable_id_index` (`notifiable_type`,`notifiable_id`);

--
-- Индексы таблицы `page_data`
--
ALTER TABLE `page_data`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Индексы таблицы `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT для таблицы `moonshine_socialites`
--
ALTER TABLE `moonshine_socialites`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `moonshine_users`
--
ALTER TABLE `moonshine_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `moonshine_user_roles`
--
ALTER TABLE `moonshine_user_roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `page_data`
--
ALTER TABLE `page_data`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `moonshine_users`
--
ALTER TABLE `moonshine_users`
  ADD CONSTRAINT `moonshine_users_moonshine_user_role_id_foreign` FOREIGN KEY (`moonshine_user_role_id`) REFERENCES `moonshine_user_roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
