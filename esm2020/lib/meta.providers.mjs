import { makeEnvironmentProviders } from '@angular/core';
import { MetaGuard } from './meta.guard';
import { MetaLoader, MetaStaticLoader } from './meta.loader';
import { MetaService } from './meta.service';
export const metaFactory = () => new MetaStaticLoader();
export function provideEnvironmentMeta(configuredProvider = {
    provide: MetaLoader,
    useFactory: metaFactory,
}) {
    return makeEnvironmentProviders([configuredProvider, MetaGuard, MetaService]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YS5wcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWV0YS9jb3JlL3NyYy9saWIvbWV0YS5wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF3Qix3QkFBd0IsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixFQUFFLENBQUM7QUFFeEQsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxxQkFBK0I7SUFDN0IsT0FBTyxFQUFFLFVBQVU7SUFDbkIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7SUFFRCxPQUFPLHdCQUF3QixDQUFDLENBQUMsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDaEYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudmlyb25tZW50UHJvdmlkZXJzLCBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXRhR3VhcmQgfSBmcm9tICcuL21ldGEuZ3VhcmQnO1xuaW1wb3J0IHsgTWV0YUxvYWRlciwgTWV0YVN0YXRpY0xvYWRlciB9IGZyb20gJy4vbWV0YS5sb2FkZXInO1xuaW1wb3J0IHsgTWV0YVNlcnZpY2UgfSBmcm9tICcuL21ldGEuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBtZXRhRmFjdG9yeSA9ICgpID0+IG5ldyBNZXRhU3RhdGljTG9hZGVyKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRW52aXJvbm1lbnRNZXRhKFxuICBjb25maWd1cmVkUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICAgIHByb3ZpZGU6IE1ldGFMb2FkZXIsXG4gICAgdXNlRmFjdG9yeTogbWV0YUZhY3RvcnksXG4gIH0sXG4pOiBFbnZpcm9ubWVudFByb3ZpZGVycyB7XG4gIHJldHVybiBtYWtlRW52aXJvbm1lbnRQcm92aWRlcnMoW2NvbmZpZ3VyZWRQcm92aWRlciwgTWV0YUd1YXJkLCBNZXRhU2VydmljZV0pO1xufVxuIl19