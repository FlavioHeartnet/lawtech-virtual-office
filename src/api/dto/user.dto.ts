export class CreateUserDto {
    email:string;
    name:string;
    surname:string;
    oab:string;
}

export class UpdateRoleDto{
    id:string;
    role:string;
}

export class FindUserbyEmailDto {
    email:string;
}

export class FindUserbyIdDto {
    id:string;
}

export class FindUserDtoOutput {
    email:string;
    name:string;
    role:string;
    oab:string;
}

export class UpdateUserDto extends CreateUserDto{
    constructor(public id:string){
        super();
    }
}