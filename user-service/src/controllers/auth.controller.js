export class AuthController {
    _authService;
    constructor(_authService) {
        this._authService = _authService;
    }
    login = async (req, res) => {
        console.log("Login controller worked");
        const data = req.body;
        console.log(data);
        const result = await this._authService.login(data);
        res.status(200).json({
            success: true,
            message: "Login successful",
        });
    };
}
//# sourceMappingURL=auth.controller.js.map