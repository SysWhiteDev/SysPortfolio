import { useLastRouteTime } from "../composables/states";

export default defineNuxtRouteMiddleware((to, from) => {
  const routeTime = useLastRouteTime();
  if (new Date().getTime() - routeTime.value < 250) return false;
  routeTime.value = new Date().getTime();
});

// this is used to fix the switch page bug