# mobile_workbox_tp

Qu'est-ce que Workbox ?

Workbox est un ensemble de modules qui a pour but faciliter la transformation d'une application en Progressive WebApp et simplifier l'interaction avec les services tels que: routing et caching.

Parmi ses fonctionnalités:

1. Les services workers api
2. Broadcast channel api
3. Background sync api


Le cache de ressources

Il existe différents stratégies de cache:

1. Cache first:

    Il s'agit d'essayer de trouver la ressource dans le cache en premier. Si n'existe pas
    on essaie de la recupérer dans le network

2. Network first:

    Au contraire de 'cache first', il s'agit d'essayer fetch la ressource dans le network en premier. Si elle n'est pas disponible, on essaie donc, la récuperation depuis le cache.

3. Network only

    Il s'agit d'aller récuperer la ressource depuis le network uniquement.
    Retourner failed si l'url ne réponds pas.

4. Cache only

    Il s'agit d'aller récuperer la ressource toujours depuis le cache. Si il n'existe pas, on return failed

5. Stale-while-revalidate

    Il s'agit de fetch la ressource depuis le network et le cache.
    Respondre depuis le cache avec un fall back du network pour actualisé le cache.


Intégration dans doctoliberal

Dans le cas de doctoliberal:

1. la stratégie 'Cache first' pour les informations de l'utilisateur car
elles ne changent pas très souvent.

2. la stratégie 'Network first' pour les rdv et les notifications en temps réels


