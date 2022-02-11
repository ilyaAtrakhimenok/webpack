import * as $ from 'jquery';
function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;

  const listener = (): number => counter++;

  $(document).on('click', listener);

  return {
    destroy() {
      $(document).off('click', listener);
      isDestroyed = true;
    },

    onClicks() {
      if (isDestroyed) {
        return 'analytics is destroyed';
      } else return counter;
    },
  };
}

window['analytics'] = createAnalytics();
