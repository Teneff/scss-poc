import component from './component';

console.log('hello world', new Date);

const dynamic = document.querySelector('#dynamic');
dynamic.addEventListener('click', async event => {
  const dynamic = await import('./dynamic');
  console.info(dynamic);
  dynamic.eventHandler(event);
});