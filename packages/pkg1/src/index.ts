// pkg1/src/index.ts
import pkg2 from '@ivokc/monorepo2';
function fun2() {
  pkg2();
  console.log('I am package 1');
  console.log('hello world 1');
}

export default fun2;
