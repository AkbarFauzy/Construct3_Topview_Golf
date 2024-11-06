const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Physics,
		C3.Plugins.TiledBg,
		C3.Plugins.Touch,
		C3.Behaviors.Tween,
		C3.Plugins.Text,
		C3.Plugins.NinePatch,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Y,
		C3.Behaviors.Physics.Acts.SetWorldGravity,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Touch.Cnds.IsInTouch,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetAngle,
		C3.Plugins.Touch.Exps.X,
		C3.Plugins.Touch.Exps.Y,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Behaviors.Tween.Acts.StopTweens,
		C3.Behaviors.Physics.Acts.ApplyImpulseAtAngle,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.Sprite.Exps.Angle,
		C3.Plugins.System.Acts.AddVar,
		C3.Behaviors.Physics.Cnds.IsSleeping,
		C3.Plugins.Sprite.Cnds.CompareHeight,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.System.Cnds.Else,
		C3.Behaviors.Physics.Acts.SetLinearDamping,
		C3.Behaviors.Physics.Cnds.CompareVelocity,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Ball_Spawner: 0},
	{Physics: 0},
	{Border: 0},
	{Hole: 0},
	{shotTaken: 0},
	{Ball: 0},
	{Uphill: 0},
	{LightGrass: 0},
	{isAiming: 0},
	{Aim: 0},
	{Touch: 0},
	{btn_swing: 0},
	{btn_reset: 0},
	{meterHeight: 0},
	{Tween: 0},
	{Meter: 0},
	{Meter_Frame: 0},
	{txt_swing: 0},
	{txt_shots: 0},
	{txt_reset: 0},
	{txt_result: 0},
	{WaterPuddle: 0},
	{LightGrass_SlopeUp_1: 0},
	{Downhill: 0},
	{sand: 0},
	{Button: 0},
	{ballVelocity: 0},
	{BaseDamping: 0},
	{shotsTaken: 0},
	{nextHole: 0}
];

self.InstanceType = {
	Ball_Spawner: class extends self.ISpriteInstance {},
	Border: class extends self.ISpriteInstance {},
	Hole: class extends self.ISpriteInstance {},
	Ball: class extends self.ISpriteInstance {},
	Uphill: class extends self.ITiledBackgroundInstance {},
	LightGrass: class extends self.ITiledBackgroundInstance {},
	Aim: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	btn_swing: class extends self.ISpriteInstance {},
	btn_reset: class extends self.ISpriteInstance {},
	Meter: class extends self.ISpriteInstance {},
	Meter_Frame: class extends self.ISpriteInstance {},
	txt_swing: class extends self.ITextInstance {},
	txt_shots: class extends self.ITextInstance {},
	txt_reset: class extends self.ITextInstance {},
	txt_result: class extends self.ITextInstance {},
	WaterPuddle: class extends self.IWorldInstance {},
	LightGrass_SlopeUp_1: class extends self.ITiledBackgroundInstance {},
	Downhill: class extends self.ITiledBackgroundInstance {},
	sand: class extends self.IWorldInstance {},
	Button: class extends self.IButtonInstance {}
}