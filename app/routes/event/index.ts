import * as Router from 'koa-router';
import { ILogger } from '../../logger';
import { EventDocument } from '../../models/event';
import { getRoute, postRoute } from '../generic';

export function eventRoute(logger: ILogger) {
    const router = new Router({ prefix: '/event' });

    router.get('/:id', getRoute(EventDocument));
    router.post('/', postRoute(EventDocument, logger));

    return router;
}