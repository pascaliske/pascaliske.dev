/* eslint-disable max-classes-per-file */

export class CreatedResponse extends Response {
    /**
     * Created Response - HTTP 201
     */
    public constructor(public readonly message: string) {
        super(JSON.stringify({ message }), { status: 201 })

        this.headers.set('Content-Type', 'application/json')
    }
}

export class BadRequestResponse<R = string> extends Response {
    /**
     * Bad Request Response - HTTP 400
     */
    public constructor(public readonly message: string, public readonly reason?: R) {
        super(JSON.stringify({ message, reason }), { status: 400 })

        this.headers.set('Content-Type', 'application/json')
    }
}

export class InternalServerErrorResponse<R = Error> extends Response {
    /**
     * Internal Server Error Response - HTTP 500
     */
    public constructor(public readonly message: string, public readonly reason?: R) {
        super(JSON.stringify({ message, reason }), { status: 500 })

        this.headers.set('Content-Type', 'application/json')
    }
}
