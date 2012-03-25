#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"styledlabel",@"name",@"ti.styledlabel",@"moduleid",@"1.3",@"version",@"e0405808-ee07-4d00-8207-19b211dadceb",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end
