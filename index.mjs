import { readFile,writeFile} from 'fs/promises';

//Readfile returns an promise
//NPM RUN SERVE IS USED TO RUN RENDER STATIC PAGES ON THE SITE

let fileread = await readFile(new URL('index.html', import.meta.url), 'utf-8')
console.log(fileread)

const data = {
  title: 'HELLO HOW DO YOU DO',
  body: 'I AM DOING WEB DEVELOPMENT',
}

for (const [k, v] of Object.entries(data)) {
  fileread = fileread.replace(`{${k}}`, v)
}
console.log(fileread);


await writeFile(new URL("index.html",import.meta.url),fileread);