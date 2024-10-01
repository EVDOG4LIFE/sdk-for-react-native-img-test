import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import { Payload } from '../payload';
import type { Models } from '../models';
import type { UploadProgress, Params } from '../client';
import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';

                            import { Browser } from '../enums/browser';
                            import { CreditCard } from '../enums/credit-card';
                            import { Flag } from '../enums/flag';

export class Avatars extends Service {

     constructor(client: Client)
     {
        super(client);
     }

    /**
     * Get browser icon
     *
     * You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user [GET /account/sessions](https://appwrite.io/docs/references/cloud/client-web/account#getSessions) endpoint. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.
     *
     * @param {Browser} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {URL}
    */
    getBrowser(code: Browser,width?: number,height?: number,quality?: number): URL {
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }

        const apiPath = '/avatars/browsers/{code}'.replace('{code}', code);
        const params: Params = {};

        if (typeof width !== 'undefined') {
            params['width'] = width;
        }

        if (typeof height !== 'undefined') {
            params['height'] = height;
        }

        if (typeof quality !== 'undefined') {
            params['quality'] = quality;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);

        params['project'] = this.client.config.project;

        for (const [key, value] of Object.entries(Service.flatten(params))) {
            uri.searchParams.append(key, value);
        }
        return uri;
    }

    /**
     * Get credit card icon
     *
     * The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.

     *
     * @param {CreditCard} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {URL}
    */
    getCreditCard(code: CreditCard,width?: number,height?: number,quality?: number): URL {
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }

        const apiPath = '/avatars/credit-cards/{code}'.replace('{code}', code);
        const params: Params = {};

        if (typeof width !== 'undefined') {
            params['width'] = width;
        }

        if (typeof height !== 'undefined') {
            params['height'] = height;
        }

        if (typeof quality !== 'undefined') {
            params['quality'] = quality;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);

        params['project'] = this.client.config.project;

        for (const [key, value] of Object.entries(Service.flatten(params))) {
            uri.searchParams.append(key, value);
        }
        return uri;
    }

    /**
     * Get favicon
     *
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.

This endpoint does not follow HTTP redirects.
     *
     * @param {string} url
     * @throws {AppwriteException}
     * @returns {URL}
    */
    getFavicon(url: string): URL {
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }

        const apiPath = '/avatars/favicon';
        const params: Params = {};

        if (typeof url !== 'undefined') {
            params['url'] = url;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);

        params['project'] = this.client.config.project;

        for (const [key, value] of Object.entries(Service.flatten(params))) {
            uri.searchParams.append(key, value);
        }
        return uri;
    }

    /**
     * Get country flag
     *
     * You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings. Country codes follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.

     *
     * @param {Flag} code
     * @param {number} width
     * @param {number} height
     * @param {number} quality
     * @throws {AppwriteException}
     * @returns {URL}
    */
    getFlag(code: Flag,width?: number,height?: number,quality?: number): URL {
        if (typeof code === 'undefined') {
            throw new AppwriteException('Missing required parameter: "code"');
        }

        const apiPath = '/avatars/flags/{code}'.replace('{code}', code);
        const params: Params = {};

        if (typeof width !== 'undefined') {
            params['width'] = width;
        }

        if (typeof height !== 'undefined') {
            params['height'] = height;
        }

        if (typeof quality !== 'undefined') {
            params['quality'] = quality;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);

        params['project'] = this.client.config.project;

        for (const [key, value] of Object.entries(Service.flatten(params))) {
            uri.searchParams.append(key, value);
        }
        return uri;
    }

    /**
     * Get image from URL
     *
     * Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 400x400px.

This endpoint does not follow HTTP redirects.
     *
     * @param {string} url
     * @param {number} width
     * @param {number} height
     * @throws {AppwriteException}
     * @returns {URL}
    */
    getImage(url: string,width?: number,height?: number): URL {
        if (typeof url === 'undefined') {
            throw new AppwriteException('Missing required parameter: "url"');
        }

        const apiPath = '/avatars/image';
        const params: Params = {};

        if (typeof url !== 'undefined') {
            params['url'] = url;
        }

        if (typeof width !== 'undefined') {
            params['width'] = width;
        }

        if (typeof height !== 'undefined') {
            params['height'] = height;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);

        params['project'] = this.client.config.project;

        for (const [key, value] of Object.entries(Service.flatten(params))) {
            uri.searchParams.append(key, value);
        }
        return uri;
    }

    /**
     * Get user initials
     *
     * Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the &#039;name&#039; parameter. If no name is given and no user is logged, an empty avatar will be returned.

You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user&#039;s initials when reloading the same theme will always return for the same initials.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.

     *
     * @param {string} name
     * @param {number} width
     * @param {number} height
     * @param {string} background
     * @throws {AppwriteException}
     * @returns {URL}
    */
    getInitials(name?: string,width?: number,height?: number,background?: string): URL {
        const apiPath = '/avatars/initials';
        const params: Params = {};

        if (typeof name !== 'undefined') {
            params['name'] = name;
        }

        if (typeof width !== 'undefined') {
            params['width'] = width;
        }

        if (typeof height !== 'undefined') {
            params['height'] = height;
        }

        if (typeof background !== 'undefined') {
            params['background'] = background;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);

        params['project'] = this.client.config.project;

        for (const [key, value] of Object.entries(Service.flatten(params))) {
            uri.searchParams.append(key, value);
        }
        return uri;
    }

    /**
     * Get QR code
     *
     * Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.

     *
     * @param {string} text
     * @param {number} size
     * @param {number} margin
     * @param {boolean} download
     * @throws {AppwriteException}
     * @returns {URL}
    */
    getQR(text: string,size?: number,margin?: number,download?: boolean): URL {
        if (typeof text === 'undefined') {
            throw new AppwriteException('Missing required parameter: "text"');
        }

        const apiPath = '/avatars/qr';
        const params: Params = {};

        if (typeof text !== 'undefined') {
            params['text'] = text;
        }

        if (typeof size !== 'undefined') {
            params['size'] = size;
        }

        if (typeof margin !== 'undefined') {
            params['margin'] = margin;
        }

        if (typeof download !== 'undefined') {
            params['download'] = download;
        }

        const uri = new URL(this.client.config.endpoint + apiPath);

        params['project'] = this.client.config.project;

        for (const [key, value] of Object.entries(Service.flatten(params))) {
            uri.searchParams.append(key, value);
        }
        return uri;
    }
};
