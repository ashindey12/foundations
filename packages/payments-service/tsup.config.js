import { defineConfig } from 'tsup'
import fs from 'fs'
import config from './config.json'

const pkgJson = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

export default defineConfig({
  entry: ['src/core/server.ts'],
  target: 'node14',
  clean: true,
  minify: config.NODE_ENV === 'production',
  esbuildOptions: (opts) => {
    opts.resolveExtensions = ['.ts', '.mjs', '.js']
  },
  noExternal: Object.keys(pkgJson.dependencies),
  external: [
    '@nestjs/platform-express',
    '@nestjs/common',
    '@nestjs/core',
    '@nestjs/microservices',
    '@nestjs/websockets',
    'cache-manager',
  ],
})
