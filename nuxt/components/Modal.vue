<template>
  <transition name="modal">
    <div
      class="
        bg-half-transparent
        duration-300
        fixed
        h-full
        left-0
        table
        text-black
        top-0
        transition-opacity
        w-full
        z-10
      "
    >
      <div class="align-middle table-cell">
        <div
          class="
            card
            duration-300
            max-h-90vh
            mx-auto
            overflow-auto
            px-8
            py-5
            shadow
            text-center
            transition-all
            w-5/6
            sm:w-1/2
            lg:w-1/3
            xl:1/4
          "
        >
          <div>
            <slot name="header" />
          </div>
          <div class="my-5">
            <slot />
          </div>
          <div>
            <slot name="footer">
              <Button :icon="false" @click.native="$emit('close')">
                {{ $t('ok') }}
              </Button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<i18n lang="yml">
de:
  ok: 'OK'
en:
  ok: 'OK'
</i18n>
