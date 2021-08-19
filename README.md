<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

### check and make sure all packages are installed

````bash

    "@types/node": "^16.0.0",
    "class-transformer": "^0.4.0",
    "class-validator": "^0.13.1",
    ```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
````

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## How to extend code

you have add color type to the enum class: `src/color-swatch/dto/color-type.enum.ts`

```bash
export enum ColorType {
  rgb = 'rgb',
  hsl = 'hsl',
}
```

Extend the data transfer object DTO in the `src/color-swatch/dto/color-swatch.dto.ts`

```yml
export class ColorTypeDto {
  @IsNotEmpty()
  @IsOptional()
  @IsIn([ColorType.rgb, ColorType.hsl, "add your color type"])
  type: ColorType;
}

export const TypesArray = [ColorType.rgb, ColorType.hsl, 'export your color as part of the array'];
export const ColorTypesMapArray = [GetRGBColorSwatch, GetHCLColorSwatch, "Create your color function and add it the array"];


##Lastly add your newly created color option which should be the as the one used in the enum dto file

src/color-swatch/color-swatch.service.ts
if (type === 'rgb') {
      func = ColorTypesMapArray[0];
    } else if (type === 'hsl') {
      func = ColorTypesMapArray[1];
    } else {
      return BadRequestException;
    }
```

## License

Nest is [MIT licensed](LICENSE).
